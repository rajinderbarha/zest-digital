import Resource_Access_popup from '@/components/Resource_Access_popup'
import Resources_Calculater_Step_1 from '@/components/Resources_Calculater_Step_1'
import Resources_Calculater_Step_2 from '@/components/Resources_Calculater_Step_2'
import Resources_Calculater_Step_3 from '@/components/Resources_Calculater_Step_3'
import Resources_Calculater_Step_4 from '@/components/Resources_Calculater_Step_4'
import Resources_Calculater_Step_5 from '@/components/Resources_Calculater_Step_5'
import React from 'react'

function popup() {
    return (
        <>
            <Resource_Access_popup />
            <Resources_Calculater_Step_1 />
            <Resources_Calculater_Step_2 />
            <Resources_Calculater_Step_3 />
            <Resources_Calculater_Step_4 />
            <Resources_Calculater_Step_5 />
        </>
    )
}

export default popup