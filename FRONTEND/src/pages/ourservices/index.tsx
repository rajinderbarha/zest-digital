import React from 'react'

const index = () => {
  return (
    <div>ourservice page</div>
  )
}

export default index





//do not need the below code 

// import Climate_action from '@/common/Climate_action';
// import Terms_Conditions from '@/components/Terms_Conditions';
// import Layout from '@/layout';
// import React from 'react';
// import { getTermsndConditionsData } from '../../../lib/sanity.query';
// import { TermsAndConditionsType } from '../../../lib/interface';

// function ourServicesSection({ termsAndConditionData }: { termsAndConditionData: TermsAndConditionsType[] }) {
//     // console.log("termsAndConditionData-------------++++++++++++++",termsAndConditionData[0])
//     return (
        
//             <Terms_Conditions data={ termsAndConditionData[0]} />
        
//     );
// }

// export default ourServicesSection;

// export async function getServerSideProps() {
//     const termsAndConditionData = await getTermsndConditionsData();
//     return {
//         props: {
//             termsAndConditionData
//         }
//     };
// }