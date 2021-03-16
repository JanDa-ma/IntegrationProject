using { sap.capire.onkosten as my } from '../db/schema';
service CatalogService @(path:'/browse') {

  @readonly entity OnkostenType as SELECT from my.OnkostenType {*
  } excluding { createdBy, modifiedBy };

}