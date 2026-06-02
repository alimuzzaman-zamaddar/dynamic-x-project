import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * Cart item shape:
 * {
 *   cartId: string,          // unique cart entry id (uuid-like)
 *   type: 'normal'|'custom', // product type
 *   id: number|string,       // product id (null for custom)
 *   product_code: string,
 *   title: string,
 *   price: number,           // effective price (discount_price ?? price)
 *   originalPrice: number,   // original price
 *   thumbnail_image: string|null,
 *   color: string[],
 *   selectedColor: string|null,
 *   category: string,
 *   technology: string,
 *   material: string,
 *   quantity: number,
 *   // custom-only extra fields:
 *   customData: object|null, // any extra custom product config data
 * }
 */

const CART_KEY = 'dx_cart';

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readCart());

  const persist = useCallback((newItems) => {
    setItems(newItems);
    writeCart(newItems);
  }, []);

  const addNormalProduct = useCallback((product, quantity = 1, selectedColor = null) => {
    const effectivePrice = product.discount_price ?? product.price;
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.type === 'normal' && i.id === product.id && i.selectedColor === selectedColor
      );
      let next;
      if (existing) {
        next = prev.map((i) =>
          i.cartId === existing.cartId ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        const newItem = {
          cartId: generateId(),
          type: 'normal',
          id: product.id,
          product_code: product.product_code,
          title: product.title,
          price: effectivePrice,
          originalPrice: product.price,
          thumbnail_image: product.thumbnail_image,
          color: product.color || [],
          selectedColor,
          category: product.category?.title || '',
          technology: product.technology?.title || '',
          material: product.material?.name || '',
          quantity,
          customData: null,
        };
        next = [...prev, newItem];
      }
      writeCart(next);
      return next;
    });
  }, []);

  const addCustomProduct = useCallback((customProduct) => {
    const newItem = {
      cartId: generateId(),
      type: 'custom',
      id: null,
      product_code: customProduct.product_code || 'CUSTOM',
      title: customProduct.title || 'Custom 3D Print',
      price: customProduct.price || 0,
      originalPrice: customProduct.price || 0,
      thumbnail_image: customProduct.thumbnail_image || null,
      color: customProduct.color || [],
      selectedColor: customProduct.selectedColor || null,
      category: customProduct.category || 'Custom',
      technology: customProduct.technology || '',
      material: customProduct.material || '',
      quantity: customProduct.quantity || 1,
      customData: customProduct.customData || null,
    };
    setItems((prev) => {
      const next = [...prev, newItem];
      writeCart(next);
      return next;
    });
  }, []);

  const updateQuantity = useCallback((cartId, quantity) => {
    if (quantity < 1) return;
    setItems((prev) => {
      const next = prev.map((i) => (i.cartId === cartId ? { ...i, quantity } : i));
      writeCart(next);
      return next;
    });
  }, []);

  const removeItem = useCallback((cartId) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.cartId !== cartId);
      writeCart(next);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    persist([]);
  }, [persist]);

  const totalCount = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addNormalProduct,
        addCustomProduct,
        updateQuantity,
        removeItem,
        clearCart,
        totalCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
