using { sap.capire.onkosten as my } from '../db/schema';

service AdminService @(_requires:'admin') {
  entity OnkostenType as projection on my.OnkostenType;
}
