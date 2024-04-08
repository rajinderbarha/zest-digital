import Climate_action from '@/common/Climate_action';
import Terms_Conditions from '@/components/Terms_Conditions';
import Layout from '@/layout';
import React from 'react';
import { getTermsndConditionsData } from '../../lib/sanity.query';
import { TermsAndConditionsType } from '../../lib/interface';

function termsconditions({ termsAndConditionData }: { termsAndConditionData: TermsAndConditionsType[] }) {
   
    return (
        <>
            <Terms_Conditions data={{ termsAndConditionData }} />
        </>
    );
}

export default termsconditions;

export async function getStaticProps() {
    const termsAndConditionData = await getTermsndConditionsData();
    return {
        props: {
            termsAndConditionData
        }
    };
}
