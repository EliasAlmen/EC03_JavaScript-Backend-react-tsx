import React from "react";
import CrudCreate from "../components/CrudCreate";
import CrudList from "../components/CrudList";

const CrudSection: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1 className="my-5 text-center fw-bold">Create, Read, Update, Delete (Simulated)</h1>
                <p className="text-center text-muted">"local database" which defaults to empty state at server restart.</p>
                <p className="text-center text-muted">Hover items to update or delete. Use the dice button or enter values manually.</p>
                <div className="container-forms d-flex justify-content-center gap-5 text-center mt-5">
                    <CrudCreate />
                </div>
                <div className="read">
                    <h3 className="mb-2 mt-5 text-center fw-bold">Products list</h3>
                    <ul className="list-group mb-5">
                        <CrudList />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CrudSection;
