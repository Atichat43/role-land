export interface IRepoFindOpts {
  includeRemoved?: boolean;
  limit?: number;
  offset?: number;
}

export interface IRepoUpdateManyOpts {
  includeRemoved?: boolean;
}

export interface IRepoRemoveOpts {
  disableSoftDeleting?: boolean;
}
