import React from "react";
import Icon from "../Icon";
import taxIcon from "../../icons/taxes.svg";

function Service() {
  return (
    <div className="flex flex-col w-full my-2 bg-white p-7">
      <div className="self-end pb-3">
        <Icon icon={taxIcon} className="w-28 h-28" />
      </div>
      <div>
        <h1 className="mt-3 text-3xl font-light font-montserrat">
          Expert Guidance
        </h1>
        <p className="mt-3 mb-6 text-sm font-medium">
          Dramatically disseminate standardized metrics after processes.
          Objectively pursue diverse catalysts for change.
        </p>
        <a href="#" className="text-sm font-semibold text-primary">
          {"Read more >"}
        </a>
      </div>
    </div>
  );
}

export default Service;
