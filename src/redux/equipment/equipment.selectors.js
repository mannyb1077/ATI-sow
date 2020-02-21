import { createSelector } from "reselect";

const selectEquipment = state => state.equipment;

export const selectCollections = createSelector(
  [selectEquipment],
  equipment => equipment.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
