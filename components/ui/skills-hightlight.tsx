import { highlights } from "@/data/data";
import { iconMap } from "@/components/icons";
import React from "react";
import { Card, CardContent } from "./card";

const SkillsHightlight = () => {
  return (
    <>
      {highlights.map(({ icon, title, description }, index) => {
        const IconComponent = iconMap[icon];
        return (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                {IconComponent && <IconComponent />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default SkillsHightlight;
