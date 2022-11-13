import React from "react";
import Work from "./Work";

function Aboutitem(props) {
    var aboutdata = props.data;
    var heading = props.title;
    return (
        <div className="my-5">
            <section>
                <h1 className="font-bold my-4">
                    {heading}
                </h1>
                <div className="list-group w-auto">
                {React.Children.toArray(
                    aboutdata.map(({ Position, Company, Location, Type, Duration}) => (
                        <Work
                            position={Position}
                            company={Company}
                            location={Location}
                            type={Type}
                            duration={Duration}
                        />
                    ))
                )}
                </div>
            </section>
        </div>
    );
}

export default Aboutitem;