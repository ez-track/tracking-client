"use client";

import { Button, Highlight } from "@/components";
import module from "./page.module.scss";
import { Progress } from "@/components/Progress/Index";
import {
  faBoxOpen,
  faTruck,
  faTruckMoving,
  faWarehouse,
} from "@fortawesome/pro-solid-svg-icons";
import { useDrawer } from "@/hooks";

export default function UserScreen() {

  const [drawerActive, drawerAction, Component] = useDrawer(<>Hello World</>);

  const steps = [
    {
      icon: faWarehouse,
      text: "Nas instalações da entregadora",
      date: new Date("2024-08-05"),
    },
    {
      icon: faTruckMoving,
      text: "Em trânsito",
      date: new Date("2024-08-06"),
    },
    {
      icon: faWarehouse,
      text: "Chegou na sua cidade",
      date: new Date("2024-08-08"),
    },
    {
      icon: faTruck,
      text: "Saiu para entrega",
      date: new Date("2024-08-09"),
    },
    {
      icon: faBoxOpen,
      text: "Entregue",
      date: new Date("2024-08-09"),
    },
  ];

  return (
    
    <div className={module.container}>
      {Component}
      <div className={`${!drawerActive && module.content}`}>
        <Button className="w-fit h-fit" onClick={drawerAction}>
          Active
        </Button>
        <div className={module.container__progress}>
          <Progress data={steps} currentIndex={4} />
        </div>
      </div>
    </div>
  );
}
