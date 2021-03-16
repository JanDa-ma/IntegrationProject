using { Currency, managed, sap } from '@sap/cds/common';
namespace sap.capire.onkosten;

entity OnkostenType : managed {
  key ID : Integer;
  beschrijving  : Integer;
}