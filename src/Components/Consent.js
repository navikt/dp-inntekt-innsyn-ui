import React from "react";
import Panel from "nav-frontend-paneler";
import {Hovedknapp} from "nav-frontend-knapper";
import {Checkbox} from "nav-frontend-skjema";
import {Normaltekst} from "nav-frontend-typografi";

export default function Consent({consent, fetchData, toggle, feilMelding}) {
    const panelStyle = {
        background: '#e0f5fb'
    }
    const divStyle = {
        padding: '0px 10px 5px 10px'
    }

    const tekstPadding = {
        paddingTop: '10px',
        paddingBottom: '5px'
    }

    const fontSize = {
        fontSize: '1.3em'
    }

    const isChecked = () => {
        return(!consent && feilMelding ? {feilmelding: 'Du må samtykke for å kunne estimere'} : null)
    }
    
    return (
        <Panel style={panelStyle}>
            <div style={divStyle}>
                <Normaltekst>
                    For at vi skal kunne estimere dagpengemulighetene dine, innhenter NAV data om inntektene dine fra skattevesenet.
                    Informasjonsutvekslingen foregår på en sikker måte, og krever ditt samtykke.
                    Hvis du ikke samtykker, kan vi ikke estimere dagpengekravet ditt.
                </Normaltekst>
                <br/>
                <Checkbox style={{...fontSize, ...tekstPadding}} onChange={toggle} checked={consent} label={'Jeg samtykker til at NAV innhenter lønnsopplysningene mine'} feil={isChecked()}/>
                <br/>
                <Hovedknapp style={tekstPadding} onClick={fetchData}>Estimer dagpenger</Hovedknapp>
            </div>
        </Panel>
    );

}