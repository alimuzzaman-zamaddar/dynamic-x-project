import React from "react";
import Contact from "../components/CommonComponents/Contact";
import MaterialProduct from "../components/PagesComponent/Material/MaterialProduct";
import CompatibilityMatrixSection from "../components/PagesComponent/Stampa/CompatibilityMatrixSection";
import { AutoExtIcon, AutoInIcon, DroneIcon, FunctionalIcon, MechanicalIcon } from "../components/SvgContainer/SvgContainer1";

const columns = [
  { label: "Functional", icon: <FunctionalIcon />, color: "#E8521A" },
  { label: "Mechanical", icon: <MechanicalIcon />, color: "#546E7A" },
  { label: "Drone", icon: <DroneIcon />, color: "#0288D1" },
  { label: "Auto Ext.", icon: <AutoExtIcon />, color: "#00838F" },
  { label: "Auto Int.", icon: <AutoInIcon />, color: "#F59E0B" },
];

const rows = [
  {
    name: "ABS",
    color: "#C62828",
    values: [1, 1, 0, 1, 1],
  },
  {
    name: "ABS-GF",
    color: "#E65100",
    values: [0, 1, 0, 0, 0],
  },
  {
    name: "ASA",
    color: "#F9A825",
    values: [0, 0, 1, 0, 1],
  },
  {
    name: "ASA Aero",
    color: "#558B2F",
    values: [0, 0, 0, 1, 0],
  },
  {
    name: "PA6-CF",
    color: "#2E7D32",
    values: [1, 1, 0, 0, 1],
  },
  {
    name: "PC",
    color: "#00838F",
    values: [0, 0, 0, 0, 0],
  },
  {
    name: "PET-CF",
    color: "#0277BD",
    values: [0, 0, 1, 0, 0],
  },
  {
    name: "PETG",
    color: "#1565C0",
    values: [1, 0, 0, 0, 1],
  },
  {
    name: "PLA",
    color: "#283593",
    values: [0, 1, 0, 0, 0],
  },
  {
    name: "PLA Aero",
    color: "#6A1B9A",
    values: [0, 0, 0, 1, 0],
  },
  {
    name: "TPU",
    color: "#7B1FA2",
    values: [0, 0, 1, 1, 1],
  },
];

const AllMaterials = () => {
  return (
    <>
      <MaterialProduct />
      <CompatibilityMatrixSection
        title="Material × Application Compatibility Matrix"
        columns={columns}
        rows={rows}
      />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  );
};

export default AllMaterials;
