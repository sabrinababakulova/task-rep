import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 4px;
`

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-top: 4px;
    border-radius: 6px;
    border: 2px solid teal;
    transition: all 200ms;
    background: ${(props) => (props.checked ? 'teal' : 'transparent')};

    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`

export const Checkbox = ({ checked, ...props }) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

export const LabelStyled = styled.label`
    border: 2px solid teal;
    padding: 0 4px;
    border-radius: 6px;
`
