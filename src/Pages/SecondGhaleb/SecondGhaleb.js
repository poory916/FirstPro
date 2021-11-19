import React from "react";
import BoxTitle from "../../Components/BoxTitle/BoxTitle";
import SecondGhalebSlick from "../../Components/SecondGhalebSlick/SecondGhalebSlick";
import Wrapper from "../../Components/Wrapper/Wrapper";
import './SecondGhaleb.css';

function SecondGhaleb () {
    return (
        <Wrapper>
            <BoxTitle title='قالب های انتخابی' />
            <div className='my-5'>
                <SecondGhalebSlick />
            </div>
        </Wrapper>
    );
}

export default SecondGhaleb;