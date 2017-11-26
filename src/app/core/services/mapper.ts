export interface Mapper {

  entityToDto(entity: Object): Object;

  dtoToEntity(dto: Object): Object;

  entityToDtoCollection(entityCollection: Array<Object>): Array<Object>;

  dtoToEntityCollection(dtoCollection: Array<Object>): Array<Object>;

}
