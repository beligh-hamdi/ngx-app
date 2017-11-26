export class Repository {
  name: string;
  fullName: string;
  description: string;
}

export class RepositoryEntity {
  name: string;
  full_name: string;
  description: string;
}


export class RepositoryMapper {
  static entityToDto(entity: RepositoryEntity): Repository {
    const dto: Repository = new Repository();
    dto.name = entity.name;
    dto.fullName = entity.full_name;
    dto.description = entity.description;
    return dto;
  }

  static dtoToEntity(dto: Repository): RepositoryEntity {
    const entity: RepositoryEntity = new RepositoryEntity();
    entity.name = dto.name;
    entity.full_name = dto.fullName;
    entity.description = dto.description;
    return entity;
  }

  static entityToDtoCollection(entityCollection: Array<RepositoryEntity>): Array<Repository> {
    return entityCollection.map(entity => this.entityToDto(entity));
  }

  static dtoToEntityCollection(dtoCollection: Array<Repository>): Array<RepositoryEntity> {
    return dtoCollection.map(dto => this.dtoToEntity(dto));
  }
}
