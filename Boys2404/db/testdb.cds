using { Currency } from '@sap/cds/common';
namespace sap.capire.Onkosten;

entity Personen {
    key ID : Integer;
    voornaam: String(111);
    achternaam: String(111);
    IBAN: String(111);
}

entity Onkosten {
    key ID: Integer;
    datum: DateTime;
    beschrijving: String(1111);
    bedrag: Currency;
    facturerenAanKlant: Boolean;
    status: String(111);
}