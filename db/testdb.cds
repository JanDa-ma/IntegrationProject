using { Currency } from '@sap/cds/common';
namespace sap.capire.Onkosten;

entity Logins {
    key ID : Integer;
    gebruikersnaam: String(111);
    wachtwoord: String(111);
}

entity Bankgegevens {
    key ID: Integer;
    IBAN: String(111);
    bedrijf: Association to Bedrijven;
}

entity Bedrijven {
    key ID: Integer;
    naam: String(111);
}

entity Onkosten {
    key ID: Integer;
    datum: DateTime;
    beschrijving: String(1111);
    bankgegevens: Association to Bankgegevens;
    bedrag: Decimal(9,2);
    valutaCode: String(111);
    facturerenAanKlant: Boolean;
    status: String(111);
    onkostenType: Association to OnkostenType;
}

entity OnkostenType {
    key ID: Integer;
    naam: String(111);
}