// import React from "react";
// import classes from "./DigitalTerms.module.css";
// import { PortableText } from "next-sanity";
// import { SingletermsAndConditionsType } from "../../../lib/interface";
// function DigitalTerms({ data }: { data: SingletermsAndConditionsType[] }) {
//   return (
//     <>
//       <div className="DigitalTerms main_padding xl:mb-[200px] lg:mb-[150px] md:mb-[100px] sm:mb-[70px] mb-[80px]">
//         <div className="main_container">
//           <h2 className="xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] text-[22px] font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[50px] min-tb:max-tb:mt-[52px] mt-[46px] ">
//             {data[0].title}
//           </h2>
//           {data?.map((item) => (
//             <div
//               className={`${classes.Portable_text} `}
//               key={`${item}_DigitalTerms`}
//             >
//               <PortableText value={item.content} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default DigitalTerms;

// import React, { useEffect } from "react";
// import classes from "./DigitalTerms.module.css";
// import { PortableText } from "next-sanity";
// import { SingletermsAndConditionsType } from "../../../lib/interface";
// import { handleHashChange, generateId } from "@/common/ScrollByID";

// interface TableRow {
//   _type: string;
//   _key: string;
//   cells: string[];
// }

// interface TableChart {
//   _type: string;
//   _key: string;
//   rows: TableRow[];
// }

// const DigitalTerms = ({ data }: { data: SingletermsAndConditionsType[] }) => {
//   useEffect(() => {
//     window.addEventListener("hashchange", handleHashChange);
//     handleHashChange();

//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []);

//   const renderCustomBlock = (blocks: any) => {
//     return blocks.map((block: any, index: number) => {
//       if (block._type === "block" && block.style === "h2") {
//         const text = block.children[0].text;
//         const id = generateId(text);

//         return (
//           <div id={id} key={index} className={classes.wrappedH2}>
//             <h2>{text}</h2>
//           </div>
//         );
//       }

//       if (block._type === "tableChart") {
//         return <TableComponent key={index} data={block} />;
//       }

//       return <PortableText key={index} value={[block]} />;
//     });
//   };

//   const formatCellContent = (cell: string) => {
//     const lines = cell.split('\n').map(line => line.trim()).filter(line => line.length > 0);
//     const formattedLines = lines.map(line => {
//       const match = line.match(/^\d+\.\s(.*)/);
//       if (match) {
//         return `<li>${match[1]}</li>`;
//       }
//       return line;
//     });
//     return `<ul>${formattedLines.join('')}</ul>`;
//   };

//   const TableComponent = ({ data }: { data: TableChart }) => {
//     return (
//       <div className={classes.tableContainer}>
//         <table className={classes.table}>
//           <thead>
//             <tr>
//               <th>Type of Data Held</th>
//               <th>Length of Time Held</th>
//               <th>How Data Held</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.rows.map((row) => (
//               <tr key={row._key}>
//                 {row.cells.map((cell, cellIndex) => (
//                   <td key={`${row._key}-${cellIndex}`} dangerouslySetInnerHTML={{ __html: formatCellContent(cell) }}></td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <div className="DigitalTerms main_padding xl:mb-[200px] lg:mb-[150px] md:mb-[100px] sm:mb-[70px] mb-[80px]">
//       <div className="main_container">
//         <h2 className="xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] text-[22px] font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[50px] min-tb:max-tb:mt-[52px] mt-[46px]">
//           {data[0].title}
//         </h2>
//         {data?.map((item, index) => (
//           <div className={`${classes.Portable_text}`} key={index}>
//             {renderCustomBlock(item.content)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalTerms;



import React, { useEffect } from "react";
import classes from "./DigitalTerms.module.css";
import { PortableText } from "next-sanity";
import { SingletermsAndConditionsType } from "../../../lib/interface";
import { handleHashChange, generateId } from "@/common/ScrollByID";

interface TableRow {
  _type: string;
  _key: string;
  cells: string[];
}

interface TableChart {
  _type: string;
  _key: string;
  rows: TableRow[];
}

const DigitalTerms = ({ data }: { data: SingletermsAndConditionsType[] }) => {
  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderCustomBlock = (blocks: any) => {
    return blocks.map((block: any, index: number) => {
      if (block._type === "block" && block.style === "h2") {
        const text = block.children[0].text;
        const id = generateId(text);

        return (
          <div id={id} key={index} className={classes.wrappedH2}>
            <h2>{text}</h2>
          </div>
        );
      }

      if (block._type === "tableChart") {
        return <TableComponent key={index} data={block} />;
      }

      return <PortableText key={index} value={[block]} />;
    });
  };

  const TableComponent = ({ data }: { data: TableChart }) => {
    return (
      <div className={classes.tableContainer}>

        {/* desktop--table--start */}

        <div className={`${classes.table_div} ${classes.desktop_table}`}>
          {/* <div className=""> */}
          <div className={`${classes.columns_heading}`}>
            <div className={`${classes.divide_columns} `}>
              <div className=""></div>
              <div className=""><h5>Length of Time Held</h5></div>
              <div className=""><h5>How Data is Held</h5></div>
              <div className=""><h5>Type of Data Held</h5></div>
            </div>
          </div>
          <div className={`${classes.row_1} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>CLIENTS</h6></div>
              <div className="">
                <ul>
                  <li>Name and contact information.</li>
                  <li>Information and documents relating to the services we are providing, including communications with you.</li>
                  <li>Billing and payment information.</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of our contractual relationship with you, then for an additional 12 months. We retain financial records for 7 years, following the end of the current financial year.</div>
              <div className="">We store this information electronically on our CRM and project management systems, some of which are stored on servers in the US. We use a US-Based accounting package to process our financial transactions.</div>
            </div>
          </div>
          <div className={`${classes.row_2} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>PROSPECTIVE CLIENTS</h6></div>
              <div className="">

                <ul>
                  <li>Name and contact information.</li>
                  <li>Information and documents relating to the services we are providing, including communications with you.</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of the enquiry, then one year.</div>
              <div className="">We store this information electronically in our lead generation system, which is hosted on US-based servers.</div>
            </div>
          </div>
          <div className={`${classes.row_3} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>JOB APPLICANTS</h6></div>
              <div className="">

                <ul>
                  <li>Name and contact information.</li>
                  <li>CV and application form.</li>
                  <li>Interview notes (for those short-listed).</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of the recruitment campaign, then one year.</div>
              <div className="">We store this information electronically on servers within the EEA.</div>
            </div>
          </div>

          <div className={`${classes.row_4} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>OUR CURRENT AND FORMER EMPLOYEES</h6></div>
              <div className="">
                <ul>
                  <li>Name and contact information.</li>
                  <li>CV and application form.</li>
                  <li>Interview notes.</li>
                  <li>Bank Details.</li>
                  <li>National Insurance Number.</li>
                  <li>Gender.</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of our contractual relationship with you, then for an additional 6 years.</div>
              <div className="">We store this information electronically on servers within the EEA.</div>
            </div>
          </div>
          {/* </div> */}
        </div>


         {/* desktop--table--end */}

         {/* tablet--table--start */}

        <div className={`${classes.table_div} ${classes.tablet_table}`}>
          {/* <div className=""> */}
          <div className={`${classes.columns_heading}`}>
            <div className={`${classes.divide_columns} `}>
              <div className=""></div>
              <div className=""><h5>Length of Time Held</h5></div>
              <div className=""><h5>How Data is Held</h5></div>
            </div>
          </div>
          <div className={`${classes.row_1} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>CLIENTS</h6></div>
              <div className="">
                <ul>
                  <li>Name and contact information.</li>
                  <li>Information and documents relating to the services we are providing, including communications with you.</li>
                  <li>Billing and payment information.</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of our contractual relationship with you, then for an additional 12 months. We retain financial records for 7 years, following the end of the current financial year.</div>
</div>
          </div>
          <div className={`${classes.row_2} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>PROSPECTIVE CLIENTS</h6></div>
              <div className="">

                <ul>
                  <li>Name and contact information.</li>
                  <li>Information and documents relating to the services we are providing, including communications with you.</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of the enquiry, then one year.</div>
            </div>
          </div>
          <div className={`${classes.row_3} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>JOB APPLICANTS</h6></div>
              <div className="">

                <ul>
                  <li>Name and contact information.</li>
                  <li>CV and application form.</li>
                  <li>Interview notes (for those short-listed).</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of the recruitment campaign, then one year.</div>
            </div>
          </div>

          <div className={`${classes.row_4} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>OUR CURRENT AND FORMER EMPLOYEES</h6></div>
              <div className="">
                <ul>
                  <li>Name and contact information.</li>
                  <li>CV and application form.</li>
                  <li>Interview notes.</li>
                  <li>Bank Details.</li>
                  <li>National Insurance Number.</li>
                  <li>Gender.</li>
                </ul>
              </div>
              <div className="">We will retain information about you for the duration of our contractual relationship with you, then for an additional 6 years.</div>
            </div>
          </div>
          {/* </div> */}

           {/* <div className=""> */}
           <div className={`${classes.columns_heading} ${classes.table_div2}`}>
            <div className={`${classes.divide_columns} `}>
              <div className=""></div>
              <div className=""><h5>Type of Data Held</h5></div>
            </div>
          </div>
          <div className={`${classes.row_1} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>CLIENTS</h6></div>
           <div className="">We store this information electronically on our CRM and project management systems, some of which are stored on servers in the US. We use a US-Based accounting package to process our financial transactions.</div>
            </div>
          </div>
          <div className={`${classes.row_2} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>PROSPECTIVE CLIENTS</h6></div>
              <div className="">We store this information electronically in our lead generation system, which is hosted on US-based servers.</div>
            </div>
          </div>
          <div className={`${classes.row_3} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>JOB APPLICANTS</h6></div>
              <div className="">We store this information electronically on servers within the EEA.</div>
            </div>
          </div>

          <div className={`${classes.row_4} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>OUR CURRENT AND FORMER EMPLOYEES</h6></div>
              <div className="">We store this information electronically on servers within the EEA.</div>
            </div>
          </div>
          {/* </div> */}
        </div>

         {/* tablet--table--end */}

          {/* mobile--table--start */}

        <div className={` ${classes.mobile_table}`}>
          {/* <div className=""> */}
          <div className={`${classes.columns_heading}`}>
            <div className={`${classes.divide_columns} `}>
              <div className=""></div>
              <div className=""><h5>Length of Time Held</h5></div>
            </div>
          </div>
          <div className={`${classes.row_1} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>CLIENTS</h6></div>
              <div className="">
                <ul>
                  <li>Name and contact information.</li>
                  <li>Information and documents relating to the services we are providing, including communications with you.</li>
                  <li>Billing and payment information.</li>
                </ul>
              </div>
              </div>
          </div>
          <div className={`${classes.row_2} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>PROSPECTIVE CLIENTS</h6></div>
              <div className="">

                <ul>
                  <li>Name and contact information.</li>
                  <li>Information and documents relating to the services we are providing, including communications with you.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${classes.row_3} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>JOB APPLICANTS</h6></div>
              <div className="">

                <ul>
                  <li>Name and contact information.</li>
                  <li>CV and application form.</li>
                  <li>Interview notes (for those short-listed).</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${classes.row_4} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>OUR CURRENT AND FORMER EMPLOYEES</h6></div>
              <div className="">
                <ul>
                  <li>Name and contact information.</li>
                  <li>CV and application form.</li>
                  <li>Interview notes.</li>
                  <li>Bank Details.</li>
                  <li>National Insurance Number.</li>
                  <li>Gender.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}
           {/* <div className=""> */}
           <div className={`${classes.columns_heading} ${classes.mobile_table1}`}>
            <div className={`${classes.divide_columns} `}>
              <div className=""></div>
              <div className=""><h5>How Data is Held</h5></div>
            </div>
          </div>
          <div className={`${classes.row_1} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>CLIENTS</h6></div>
              <div className="">We will retain information about you for the duration of our contractual relationship with you, then for an additional 12 months. We retain financial records for 7 years, following the end of the current financial year.</div>
             </div>
          </div>
          <div className={`${classes.row_2} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>PROSPECTIVE CLIENTS</h6></div>
              <div className="">We will retain information about you for the duration of the enquiry, then one year.</div>
            </div>
          </div>
          <div className={`${classes.row_3} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>JOB APPLICANTS</h6></div>
              <div className="">We will retain information about you for the duration of the recruitment campaign, then one year.</div>
            </div>
          </div>

          <div className={`${classes.row_4} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
               <div className={`${classes.left_heading}`}><h6>OUR CURRENT AND FORMER EMPLOYEES</h6></div>
              <div className="">We will retain information about you for the duration of our contractual relationship with you, then for an additional 6 years.</div>
            </div>
          </div>
          {/* </div> */}

           {/* <div className=""> */}
           <div className={`${classes.columns_heading} ${classes.mobile_table2}`}>
            <div className={`${classes.divide_columns} `}>
              <div className=""></div>
              <div className=""><h5>Type of Data Held</h5></div>
            </div>
          </div>
          <div className={`${classes.row_1} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>CLIENTS</h6></div>
              <div className="">We store this information electronically on our CRM and project management systems, some of which are stored on servers in the US. We use a US-Based accounting package to process our financial transactions.</div>
            </div>
          </div>
          <div className={`${classes.row_2} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
            <div className={`${classes.left_heading}`}><h6>PROSPECTIVE CLIENTS</h6></div>
              <div className="">We store this information electronically in our lead generation system, which is hosted on US-based servers.</div>
            </div>
          </div>
          <div className={`${classes.row_3} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>JOB APPLICANTS</h6></div>
              <div className="">We store this information electronically on servers within the EEA.</div>
            </div>
          </div>

          <div className={`${classes.row_4} ${classes.rows}`}>

            <div className={`${classes.divide_columns} `}>
              <div className={`${classes.left_heading}`}><h6>OUR CURRENT AND FORMER EMPLOYEES</h6></div>
              <div className="">We store this information electronically on servers within the EEA.</div>
            </div>
          </div>
          {/* </div> */}
        </div>

         {/* mobile--table--end */}

      </div>
    );
  };

  return (
    <div className="DigitalTerms main_padding xl:mb-[200px] lg:mb-[150px] md:mb-[100px] sm:mb-[70px] mb-[80px]">
      <div className="main_container">
        <h2 className="xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] text-[22px] font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[50px] min-tb:max-tb:mt-[52px] mt-[46px]">
          {data[0].title}
        </h2>
        {data?.map((item, index) => (
          <div className={`${classes.Portable_text}`} key={index}>
            {renderCustomBlock(item.content)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTerms;
