import React, { useState, useMemo } from 'react'
import Container from '../../../shared/Container'


const APPLICATIONS = [
  { key: 'functional', label: 'Functional', icon: '⚙️' },
  { key: 'mechanical', label: 'Mechanical', icon: '🔧' },
  { key: 'drone', label: 'Drone', icon: '🚁' },
  { key: 'auto_gas', label: 'Auto Gas', icon: '⛽' },
  { key: 'auto_ev', label: 'Auto EV', icon: '🔋' },
]

const MATERIALS = [
  { key: 'abs', label: 'ABS', color: '#EF4444' },
  { key: 'abs_cf', label: 'ABS-CF', color: '#F97316' },
  { key: 'asa', label: 'ASA', color: '#EAB308' },
  { key: 'asa_aero', label: 'ASA Aero', color: '#EAB308' },
  { key: 'pae_cf', label: 'PAE-CF', color: '#22C55E' },
  { key: 'pc', label: 'PC', color: '#6B7280' },
  { key: 'pet_cf', label: 'PET-CF', color: '#3B82F6' },
  { key: 'petg', label: 'PETG', color: '#3B82F6' },
  { key: 'pla', label: 'PLA', color: '#8B5CF6' },
  { key: 'pla_aero', label: 'PLA Aero', color: '#8B5CF6' },
  { key: 'tpu', label: 'TPU', color: '#EC4899' },
]

// true = filled compatible | 'outline' = partial | false = not compatible
const MATRIX = {
  abs: { functional: true, mechanical: true, drone: false, auto_gas: true, auto_ev: true },
  abs_cf: { functional: true, mechanical: true, drone: false, auto_gas: false, auto_ev: false },
  asa: { functional: false, mechanical: false, drone: false, auto_gas: false, auto_ev: 'outline' },
  asa_aero: { functional: false, mechanical: false, drone: false, auto_gas: false, auto_ev: false },
  pae_cf: { functional: true, mechanical: true, drone: false, auto_gas: false, auto_ev: true },
  pc: { functional: false, mechanical: false, drone: false, auto_gas: false, auto_ev: false },
  pet_cf: { functional: false, mechanical: false, drone: true, auto_gas: false, auto_ev: false },
  petg: { functional: true, mechanical: false, drone: false, auto_gas: false, auto_ev: true },
  pla: { functional: false, mechanical: true, drone: false, auto_gas: false, auto_ev: false },
  pla_aero: { functional: false, mechanical: false, drone: false, auto_gas: false, auto_ev: false },
  tpu: { functional: false, mechanical: false, drone: false, auto_gas: true, auto_ev: 'outline' },
}

const APP_COLORS = {
  functional: '#F97316',
  mechanical: '#9CA3AF',
  drone: '#3B82F6',
  auto_gas: '#10B981',
  auto_ev: '#F59E0B',
}

// ── Sub-components ────────────────────────────────────────────────────────────

const AppIcon = ({ icon, label, color, isHighlighted }) => (
  <div className="flex flex-col items-center gap-1.5 min-w-[90px]">
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200"
      style={{
        background: isHighlighted ? `${color}30` : `${color}18`,
        border: `1.5px solid ${isHighlighted ? color : color + '40'}`,
        transform: isHighlighted ? 'scale(1.1)' : 'scale(1)',
      }}
    >
      {icon}
    </div>
    <span
      className="text-[11px] font-medium text-center leading-tight transition-colors duration-200"
      style={{ color: isHighlighted ? color : '#6B7280' }}
    >
      {label}
    </span>
  </div>
)

const Dot = ({ active, color, isRowSelected, isSelected }) => {
  const dimmed = isRowSelected && !isSelected

  if (!active) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div
          className="w-7 h-7 rounded-full border-[1.5px] transition-all duration-200"
          style={{
            borderColor: '#E5E7EB',
            background: 'transparent',
            opacity: dimmed ? 0.25 : 1,
          }}
        />
      </div>
    )
  }

  if (active === 'outline') {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div
          className="w-7 h-7 rounded-full border-2 transition-all duration-200"
          style={{
            borderColor: color,
            background: `${color}18`,
            opacity: dimmed ? 0.25 : 1,
            boxShadow: isSelected ? `0 0 0 2px ${color}40` : 'none',
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="w-7 h-7 rounded-full relative flex items-center justify-center transition-all duration-200"
        style={{
          background: `${color}20`,
          opacity: dimmed ? 0.25 : 1,
          boxShadow: isSelected ? `0 0 0 2px ${color}60` : 'none',
          transform: isSelected ? 'scale(1.15)' : 'scale(1)',
        }}
      >
        <div className="w-4 h-4 rounded-full" style={{ background: color }} />
      </div>
    </div>
  )
}

const LegendDot = ({ color, label, active, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 transition-opacity duration-150 hover:opacity-80"
    style={{ opacity: active ? 1 : 0.4 }}
  >
    <div className="w-3 h-3 rounded-full" style={{ background: color }} />
    <span className="text-[11px] text-gray-500 font-medium">{label}</span>
  </button>
)

// ── Main Component ────────────────────────────────────────────────────────────

const Matrix = () => {
  const [selectedMaterials, setSelectedMaterials] = useState(new Set())

  const toggleMaterial = (key) => {
    setSelectedMaterials((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const clearSelection = () => setSelectedMaterials(new Set())

  const hasSelection = selectedMaterials.size > 0

  // Dynamic totals based on selected rows (or all rows if none selected)
  const dynamicTotals = useMemo(() => {
    const rows = hasSelection
      ? MATERIALS.filter((m) => selectedMaterials.has(m.key))
      : MATERIALS

    return APPLICATIONS.reduce((acc, app) => {
      acc[app.key] = rows.filter(
        (m) => MATRIX[m.key]?.[app.key] === true || MATRIX[m.key]?.[app.key] === 'outline'
      ).length
      return acc
    }, {})
  }, [selectedMaterials, hasSelection])

  // Which app columns have at least one selected + compatible material
  const highlightedApps = useMemo(() => {
    if (!hasSelection) return new Set()
    return new Set(
      APPLICATIONS
        .filter((app) =>
          MATERIALS.some(
            (m) =>
              selectedMaterials.has(m.key) &&
              (MATRIX[m.key]?.[app.key] === true || MATRIX[m.key]?.[app.key] === 'outline')
          )
        )
        .map((app) => app.key)
    )
  }, [selectedMaterials, hasSelection])

  return (
    <section className="lg:py-20 py-10 bg-white">
      <Container>
        {/* Title + clear button */}
        <div className="flex flex-wrap items-end justify-between gap-4 pb-2">
          <h3 className="text-[40px] lg:text-[48px] font-semibold text-black leading-tight">
            Material × Application Compatibility Matrix
          </h3>

          {hasSelection && (
            <button
              onClick={clearSelection}
              className="flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors duration-150 pb-1"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 1l11 11M12 1L1 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              Clear selection ({selectedMaterials.size})
            </button>
          )}
        </div>

        <div className="p-6 rounded-2xl border-[1.23px] border-[#E5E7EB] overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">

            {/* ── Header ── */}
            <thead>
              <tr>
                <th className="pb-4 w-40" />
                {APPLICATIONS.map((app) => (
                  <th key={app.key} className="pb-4 text-center">
                    <AppIcon
                      icon={app.icon}
                      label={app.label}
                      color={APP_COLORS[app.key]}
                      isHighlighted={hasSelection && highlightedApps.has(app.key)}
                    />
                  </th>
                ))}
              </tr>
            </thead>

            {/* ── Body ── */}
            <tbody>
              {MATERIALS.map((mat, rowIdx) => {
                const isSelected = selectedMaterials.has(mat.key)
                const isDimmed = hasSelection && !isSelected

                return (
                  <tr
                    key={mat.key}
                    onClick={() => toggleMaterial(mat.key)}
                    className="cursor-pointer transition-colors duration-150 hover:bg-gray-50"
                    style={{
                      background: isSelected
                        ? `${mat.color}0C`
                        : rowIdx % 2 === 0
                          ? '#ffffff'
                          : '#f9fafb80',
                    }}
                  >
                    {/* Row label with checkbox */}
                    <td className="py-2 pr-4">
                      <div
                        className="flex items-center gap-2 transition-opacity duration-200"
                        style={{ opacity: isDimmed ? 0.3 : 1 }}
                      >
                        {/* Mini checkbox */}
                        <div
                          className="w-4 h-4 rounded border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-150"
                          style={{
                            borderColor: isSelected ? mat.color : '#D1D5DB',
                            background: isSelected ? mat.color : 'transparent',
                          }}
                        >
                          {isSelected && (
                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                              <path
                                d="M1 3.5L3.5 6L8 1"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Color dot */}
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: mat.color }}
                        />

                        <span
                          className="text-[13px] font-medium whitespace-nowrap transition-colors duration-150"
                          style={{ color: isSelected ? mat.color : '#374151' }}
                        >
                          {mat.label}
                        </span>
                      </div>
                    </td>

                    {/* Compatibility dots — stop row click propagation */}
                    {APPLICATIONS.map((app) => (
                      <td key={app.key} className="py-2 text-center h-12">
                        <Dot
                          active={MATRIX[mat.key]?.[app.key] ?? false}
                          color={mat.color}
                          isRowSelected={hasSelection}
                          isSelected={isSelected}
                        />
                      </td>
                    ))}
                  </tr>
                )
              })}

              {/* ── Totals row ── */}
              <tr className="border-t border-gray-100">
                <td className="pt-4 pb-1 pl-6">
                  <span className="text-[12px] text-gray-400 font-medium">
                    {hasSelection ? `Total (${selectedMaterials.size} selected)` : 'Total'}
                  </span>
                </td>
                {APPLICATIONS.map((app) => (
                  <td key={app.key} className="pt-4 pb-1 text-center">
                    <span
                      className="text-[13px] font-semibold tabular-nums transition-all duration-200"
                      style={{
                        color: APP_COLORS[app.key],
                        opacity: hasSelection && !highlightedApps.has(app.key) ? 0.3 : 1,
                      }}
                    >
                      {dynamicTotals[app.key]}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          {/* ── Legend (also clickable) ── */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-2">
            {MATERIALS.map((mat) => (
              <LegendDot
                key={mat.key}
                color={mat.color}
                label={mat.label}
                active={!hasSelection || selectedMaterials.has(mat.key)}
                onClick={() => toggleMaterial(mat.key)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Matrix