import React from "react";
import classes from "./DigitalTerms.module.css";
import { DigitalTermsOfServiceType } from "../../../lib/interface";
import { PortableText } from "next-sanity";
function DigitalTerms({ data }: { data: any }) {
  return (
    <>
      <div className="DigitalTerms px-[15px]">
        <div className="main_container">
        <h2 className="lgxl:text-55px lg:text-50px md:text-40px text-35px font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[55px] mt-[35px] xl:mb-[120px] lg:mb-[100px] md:mb-[80px] mb-[50px]" >
          {data[0].title}
        </h2>
        {data?.map((item: any, index: number) => (
          <div className={`${classes.Portable_text} max-w-[1520px] mx-auto`} key={`${item}_DigitalTerms`}>
            <PortableText value={item.content} />
            {/* 
                    <div className="details main_container_x">
                        <div className="definations">
                            <div className="">

                                <h2 className={`${classes.list_title}`}>DEFINITIONS</h2>
                                <div className="defination_describe flex flex-col gap-6 font-lato text-lg">
                                    <p>The following term(s) below shall have the following meaning(s): </p>
                                    <p>“Customer” means the organisation or person who purchases services from the Supplier. </p>
                                    <p>“Supplier” means Zest Digital Ltd, 1-3 Kings Meadow, Osney Mead, Oxford, Oxfordshire OX2 0DP.</p>
                                    <p>“Services” The services provided by The Supplier.</p>
                                    <p>“Relationship Contract” The terms and conditions specific to your contract, to which these Terms and Conditions are an appendix of. </p>
                                    <p>“Commencement Date” The date of this agreement, as of date on your accompanying Relationship Contract. </p>
                                    <p>“Website” The location of The Customers website as per the URL specified in the Relationship Contract.</p>
                                    <p>“Contract” or “Agreement” The terms of this document, and Relationship Contract, by which The Supplier and The Customer will be bound.</p>
                                    <p>“Proposal” The document defining the proposed approach to your marketing campaign. </p>
                                    <p>“Change Order” A document which specifies changes to the brief, which fall outside the scope of the original brief and / or requirements.</p>
                                </div>
                            </div>
                            <div className="general">
                                <h2 className={`${classes.list_sub_title}`}>1. GENERAL</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>1.1. These Terms of Service shall apply to all contracts for the supply of services by the Supplier to the Customer. </p>
                                    <p> 1.2. Before the commencement of the services the Supplier shall submit to the Customer a Proposal which shall specify the goods and services to be supplied and the price payable. The Customer shall notify the Supplier immediately if the Customer does not agree with the contents of the Proposal. All Proposals shall be subject to these Terms and Conditions.</p>
                                    <p>1.3. This agreement shall take effect as from the Commencement Date. </p>
                                    <p>1.4. No partnership: Nothing in the Contract is intended to, or shall be deemed to, constitute a partnership or joint venture of any kind between any of the parties, nor constitute any party the agent of another party for any purpose. No party shall have authority to act as agent for, or to bind, the other party in any way.</p>
                                </div>
                            </div>
                            <div className="services">
                                <h2 className={`${classes.list_sub_title}`}>2. SERVICES</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>2.1. The Supplier will use its experience of digital marketing to fulfil objectives outlined within this document to the best of ability. Given variables outside of The Supplier’s control, achievement of the objectives cannot be guaranteed. </p>
                                    <p> 2.2. The Supplier shall use all reasonable endeavours to meet any performance dates specified in the initial proposal, but any such dates shall be estimates only and time shall not be of the essence for performance of the Services.</p>
                                    <p> 2.3. The Supplier warrants to the Customer that the Services will be provided using reasonable care and skill. </p>
                                    <p> 2.4. The Customer shall:</p>
                                    <p>2.4.a. co-operate with the Supplier in all matters relating to the Services; </p>
                                    <p>2.4.b. provide the Supplier with such information and materials as the Supplier may reasonably require in order to supply the Services, and ensure that such information is accurate in all material respects;</p>
                                    <p> 2.4.c. obtain and maintain all necessary licences, permissions and consents which may be required before the date on which the Services are to start; </p>
                                    <p>2.5. If the Supplier’s performance of any of its obligations under the Contract is prevented or delayed by any act or omission by the Customer or failure by the Customer to perform any relevant obligation (Customer Default): </p>
                                    <p>2.5.a. the Supplier shall without limiting its other rights or remedies have the right to suspend performance of the Services until the Customer remedies the Customer Default, and to rely on the Customer Default to relieve it from the performance of any of its obligations to the extent the Customer Default prevents or delays the Supplier’s performance of any of its obligations; </p>
                                    <p>2.5.b. the Supplier shall not be liable for any costs or losses sustained or incurred by the Customer arising directly or indirectly from the Supplier’s failure or delay to perform any of its obligations as set out in this clause 4.2; and </p>
                                    <p>2.5.c. the Customer shall reimburse the Supplier on written demand for any costs or losses sustained or incurred by the Supplier arising directly or indirectly from the Customer Default.</p>
                                </div>
                            </div>
                            <div className="fee_payment">
                                <h2 className={`${classes.list_sub_title}`}>3. FEES & PAYMENT</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>3.1. The Supplier’s fees shall be payable by The Customer in advance and by Direct Debit, to be collected on the 1st of each month, for that month’s work. </p>
                                    <p>3.1.a. the Supplier shall be entitled to charge the Customer for any expenses reasonably incurred by the individuals whom the Supplier engages in connection with the Services including, but not limited to, travelling expenses, hotel costs, subsistence and any associated expenses, and for the cost of services provided by third parties and required by the Supplier for the performance of the Services, and for the cost of any software used specifically for the Customer.</p>
                                    <p> 3.2. If the direct debit amount requested is unsuccessful The Supplier and The Customer will be notified by email. The Supplier will attempt to take payment once again within 2 working days of failed payment. If the payment request fails for a second time The Customer will be notified and agrees to make payment immediately via BACS (BACS details below). If payment has not been made via BACS within 5 working days of the second failed payment then The Supplier will suspend The Customer’s service until payment has cleared in full.</p>
                                    <p>3.3. Without limiting any other right or remedy of the Supplier, if the Customer fails to make any payment due to the Supplier under the Contract by the due date for payment, the Supplier shall have the right to suspend all services being provided by the supplier until such payment has been made and cleared in full. Should the Supplier suspend its service the Customer should be aware that this could have a negative effect on their marketing campaign(s) for which the Supplier cannot be held responsible for any direct or indirect impact this has on the Customer. Once a service is suspended, and as part of the Suppliers credit control process, a final demand will be issued to start formal recovery of the monies owed. </p>
                                    <p>3.4. The Customer shall pay all amounts due under the Contract in full without any deduction or withholding except as required by law and the Customer shall not be entitled to assert any credit, set-off or counterclaim against the Supplier in order to justify withholding payment of any such amount in whole or in part. The Supplier may, without limiting its other rights or remedies, set off any amount owing to it by the Customer against any amount payable by the Supplier to the Customer.</p>
                                </div>
                            </div>
                            <div className="licenses_property_rights">
                                <h2 className={`${classes.list_sub_title}`}>4. LICENSES & INTELLECTUAL PROPERTY RIGHTS</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>4.1. Subject to clause 4.3, all Intellectual Property Rights in the Deliverables shall vest and belong to the Customer absolutely, and the Supplier hereby assigns with full title guarantee and free from all encumbrances and rights of third parties all such Intellectual Property Rights in the Deliverables to Customer. The Supplier shall execute all documents and take all actions necessary or reasonably requested by Customer to document, obtain, maintain, perfect or assign its rights to the Deliverables. </p>
                                    <p> 4.2. To the extent that any Pre-Existing Work is incorporated into the Deliverables it shall remain the property of the Supplier. The Supplier hereby grants (and if the Pre-Existing Work shall include any third-party materials, procure the grant from these third parties) to the Customer a non-exclusive, transferable, irrevocable, worldwide and perpetual licence to use such Pre-Existing Work as part of the Deliverables.</p>
                                    <p>4.3. The Customer grants The Supplier a limited, non-exclusive, non-transferrable, revocable and worldwide licence to access and use the: </p>
                                    <p> 4.3.a. Websites;<br /> 4.3.b. Materials;<br /> 4.3.c. Pages; and <br /> 4.3.d. Name, logo, company name and trademark of the Customer,</p>
                                    <p>Solely to provide the Services to the Customer in accordance with this Agreement during the term of this Agreement.</p>
                                </div>
                            </div>
                            <div className="licenses_property_rights">
                                <h2 className={`${classes.list_sub_title}`}>5. DURATION OF AGREEMENT</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>5.1. This agreement is valid for a minimum period, as outlined within the relevant signed proposal.</p>
                                    <p>5.2. Cancellation may be given by either party in writing (either electronically or by post) addressed to the other at its last known address. Any such notice shall be deemed to have been given or received at the time of transmission. </p>
                                    <p>On termination of the Contract for any reason: </p>
                                    <p>5.2.a. the Customer shall immediately pay to the Supplier all of the Supplier’s outstanding unpaid invoices and interest and, in respect of Services supplied but for which no invoice has been submitted, the Supplier shall submit an invoice, which shall be payable by the Customer immediately on receipt;</p>
                                    <p> 5.2.b. the accrued rights, remedies, obligations and liabilities of the parties as at expiry or termination shall not be affected, including the right to claim damages in respect of any breach of the Contract which existed at or before the date of termination or expiry; and </p>
                                    <p> 5.2.c. clauses which expressly or by implication have effect after termination shall continue in full force and effect.</p>
                                    <p> 5.3. The Notice of Cancellation will be deemed to take effect from the Customer’s next invoice date.</p>
                                    <p> For example: if the Customer is invoiced on the 1st of each month and cancels on the 16th of the current month, notice will be taken and come into effect from the 1st of the following month (not the 16th of the current month).</p>
                                    <p>5.4. On termination of the agreement the Supplier shall transfer to the Customer all intellectual property of the Customer; the supplier has the right to charge reasonable time and expense for its services based on the rates outlined in this agreement. Charges for any transfer will be agreed between the supplier and the customer before any transfer takes place.</p>
                                </div>
                            </div>
                            <div className="confidentiality">
                                <h2 className={`${classes.list_sub_title}`}>6. CONFIDENTIALITY</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>A party (Receiving Party) shall keep in strict confidence all technical or commercial know-how, specifications, inventions, processes or initiatives which are of a confidential nature and have been disclosed to the Receiving Party by the other party (Disclosing Party), its employees, agents or subcontractors, and any other confidential information concerning the Disclosing Party’s business or its products or its services which the Receiving Party may obtain. The Receiving Party shall restrict disclosure of such confidential information to such of its employees, agents or subcontractors as need to know it for the purpose of discharging the Receiving Party’s obligations under the Contract, and shall ensure that such employees, agents or subcontractors are subject to obligations of confidentiality corresponding to those which bind the Receiving Party. This clause 7 shall survive termination of the Contract. </p>
                                    <p>LIMITATION OF LIABILITY: THE CUSTOMER’S ATTENTION IS PARTICULARLY DRAWN TO THIS CLAUSE </p>
                                    <p> 6.1. Nothing in these Conditions shall limit or exclude the Supplier’s liability for: </p>
                                    <p>6.1.a. fraud or fraudulent misrepresentation; or</p>
                                    <p>6.1.b. breach of the terms implied by section 2 of the Supply of Goods and Services Act 1982 (title and quiet possession)</p>
                                    <p>6.1.c. the Supplier shall under no circumstances whatever be liable to the Customer, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, for any loss of profit, or any indirect or consequential loss arising under or in connection with the Contract; and</p>
                                    <p>6.1.d. the Supplier’s total liability to the Customer in respect of all other losses arising under or in connection with the Contract, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall in no circumstances exceed £100.</p>
                                </div>
                            </div>
                            <div className="responsibility">
                                <h2 className={`${classes.list_sub_title}`}>7. RESPONSIBILITY</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>We take our responsibility to deliver measurable return on investment to you very seriously. We will use best endeavours to demonstrate during our working relationship that we have paid for our own fees.</p>
                                    <p>This is not something we can guarantee of course, due to factors outside of our control, but we set this as a benchmark to achieve at least this level.</p>
                                    <p> This can take many forms to include, but not limited to:</p>


                                    <ul className='list-disc list-inside ml-[40px]'>
                                        <li>Increased revenue</li>
                                        <li>Saved employment, tooling, consultancy costs</li>
                                        <li>Saved time</li>
                                        <li>Saved recruitment fees</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="hosting">
                                <h2 className={`${classes.list_sub_title}`}>8. HOSTING</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>Overdue Invoices and Hosting: If The Supplier provides website hosting to The Customer who has invoices overdue for any part of The Customers service then The Supplier reserves the right to suspend The Customer’s campaign and website entirely until any overdue payments are settled in full.</p>
                                </div>
                            </div>
                            <div className="amendment">
                                <h2 className={`${classes.list_sub_title}`}>9. AMENDMENTS</h2>
                                <div className={`${classes.list_sub_items}`}>
                                    <p>9.1. The Supplier is entitled to change these Conditions from time to time and will display the changed Conditions at https://www.zestdigital.com/terms/digital-terms/.</p>
                                </div>
                            </div>
                        </div>
                        <div className="changelog">
                            <div className="">

                                <h2 className={`${classes.list_title}`}>CHANGELOG</h2>
                                <div className="defination_describe flex flex-col gap-6 font-lato text-lg">
                                    <p>The following table sets out any changes made to the above terms and conditions, in accordance with clause 9 of the Digital Terms of Service.</p>
                                </div>
                            </div>
                            <div className={`${classes.list_sub_items} mt-[40px]`}>
                                <p><span className="font-bold">16/07/2020:</span> Change of registered address from Thomas House, Langford Locks, Kidlington, Oxfordshire, OX5 1HR to 1-3 Kings Meadow, Osney Mead, Oxford, Oxfordshire, OX2 0DP. </p>
                                <p><span className="font-bold">16/07/2020:</span> Change of clause 3.1 from “3.1. The Supplier’s fees shall be payable by The Customer in advance and by Direct Debit, to be collected on the 1st of each month, for that month’s work, as outlined in the Relationship Contract.” to “3.1. The Supplier’s fees shall be payable by The Customer in advance and by Direct Debit, to be collected on the 1st of each month, for that month’s work.”. </p>
                                <p><span className="font-bold">16/07/2020:</span> Change of clause 5.1 from “5.1. This agreement is valid for a minimum period, as outline in the Customers Relationship Contract.” to “5.1. This agreement is valid for a minimum period, as outlined within the relevant signed proposal.”</p>
                                <p><span className="font-bold">16/07/2020:</span> Change of clause 6.1.d from “6.1.d. the Supplier’s total liability to the Customer in respect of all other losses arising under or in connection with the Contract, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall in no circumstances exceed 50% of total fees outlined in this contract, only, not inclusive of any third-party costs incurred.” to “6.1.d. the Supplier’s total liability to the Customer in respect of all other losses arising under or in connection with the Contract, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall in no circumstances exceed £100.”</p>
                            </div>
                        </div>

                    </div>*/}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default DigitalTerms;
