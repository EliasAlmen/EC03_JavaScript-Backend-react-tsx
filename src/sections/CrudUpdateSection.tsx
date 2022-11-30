import React from "react";
import CrudUpdate from "../components/CrudUpdate";

const CrudUpdateSection: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="container-forms d-flex justify-content-center gap-5 text-center mt-5">
                    <CrudUpdate />
                </div>
                <div className="read">
                    <ul className="list-group my-5"></ul>
                </div>
            </div>
        </>
    );
};

export default CrudUpdateSection;
