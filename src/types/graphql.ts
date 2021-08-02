import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { context } from './service';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
  Uploads: any;
};

export type AccountDataUpdateInput = {
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  userName: Scalars['String'];
};

export enum Category {
  Education = 'Education',
  Friends = 'Friends',
  Community = 'Community',
  Business = 'Business',
  Entertainment = 'Entertainment'
}

export type Community = {
  __typename?: 'Community';
  id: Scalars['ID'];
  communityName: Scalars['String'];
  ownerId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  influencer?: Maybe<Scalars['Boolean']>;
  artist?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommunityMember = {
  __typename?: 'CommunityMember';
  id: Scalars['ID'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
  community?: Maybe<Community>;
  communityId: Scalars['ID'];
  admin?: Maybe<Scalars['Boolean']>;
  banned?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum CommunityStatus {
  Artist = 'Artist',
  Influencer = 'Influencer'
}

export type CreateCommunityInput = {
  communityName: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
  category: Scalars['String'];
};

export type CreateCommunityMemberInput = {
  userId: Scalars['ID'];
  communityId: Scalars['ID'];
  admin?: Maybe<Scalars['Boolean']>;
  banned?: Maybe<Scalars['Boolean']>;
};

export type CreateEventInput = {
  communityId: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  eventStartDate: Scalars['String'];
  eventEndDate: Scalars['String'];
  category: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
};

export type CreateTicketInput = {
  userId: Scalars['ID'];
  eventId: Scalars['ID'];
  price: Scalars['Float'];
  used?: Maybe<Scalars['Boolean']>;
};


export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  user?: Maybe<User>;
  creatorId: Scalars['ID'];
  community?: Maybe<Community>;
  communityId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  category?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  horizontal?: Maybe<Scalars['Boolean']>;
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
};

export type FilterInput = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FilterOrderType>;
  order?: Maybe<FilterOrder>;
};

export enum FilterOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum FilterOrderType {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export enum Gender {
  Male = 'Male',
  Female = 'Female'
}


export type LoginInput = {
  userName: Scalars['String'];
  password: Scalars['String'];
  device: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountDataUpdate: Scalars['Boolean'];
  addCommunityMember: CommunityMember;
  createCommunity: Community;
  createEvent: Event;
  createTicket: Ticket;
  deactivateCommunity: Scalars['Boolean'];
  deleteCommunity: Scalars['Boolean'];
  deleteEvent: Scalars['Boolean'];
  deleteTicket: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login?: Maybe<User>;
  multipleUpload: Array<File>;
  personalDataUpdate: Scalars['Boolean'];
  privateCommunity: Community;
  profileUpdate: Scalars['Boolean'];
  removeCommunityMember: Scalars['Boolean'];
  removeUpload?: Maybe<Scalars['Boolean']>;
  securityDataUpdate?: Maybe<User>;
  signUp: User;
  singleUpload: File;
  socailDataUpdate: Scalars['Boolean'];
  statusUpdate: Community;
  updateCommunity: Community;
  updateCommunityMember: CommunityMember;
  updateEvent: Event;
  updateTicket: Ticket;
  verifyCommunity: Community;
};


export type MutationAccountDataUpdateArgs = {
  data?: Maybe<AccountDataUpdateInput>;
};


export type MutationAddCommunityMemberArgs = {
  data?: Maybe<CreateCommunityMemberInput>;
};


export type MutationCreateCommunityArgs = {
  data?: Maybe<CreateCommunityInput>;
};


export type MutationCreateEventArgs = {
  data?: Maybe<CreateEventInput>;
};


export type MutationCreateTicketArgs = {
  data?: Maybe<CreateTicketInput>;
};


export type MutationDeactivateCommunityArgs = {
  id: Scalars['ID'];
  activated?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCommunityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  data?: Maybe<LoginInput>;
};


export type MutationMultipleUploadArgs = {
  files?: Maybe<Array<Maybe<Scalars['Uploads']>>>;
};


export type MutationPersonalDataUpdateArgs = {
  data?: Maybe<PersonalDataUpdateInput>;
};


export type MutationPrivateCommunityArgs = {
  id: Scalars['ID'];
  public?: Maybe<Scalars['Boolean']>;
};


export type MutationProfileUpdateArgs = {
  uploadFileId: Scalars['ID'];
};


export type MutationRemoveCommunityMemberArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveUploadArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationSecurityDataUpdateArgs = {
  data?: Maybe<SecurityDataUpdateInput>;
};


export type MutationSignUpArgs = {
  data?: Maybe<SignUpInput>;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
  directory?: Maybe<Scalars['String']>;
};


export type MutationSocailDataUpdateArgs = {
  data?: Maybe<SocailDataUpdateInput>;
};


export type MutationStatusUpdateArgs = {
  id: Scalars['ID'];
  status: CommunityStatus;
};


export type MutationUpdateCommunityArgs = {
  data?: Maybe<UpdateCommunityInput>;
  id: Scalars['ID'];
};


export type MutationUpdateCommunityMemberArgs = {
  data?: Maybe<UpdateCommunityMemberInput>;
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  data?: Maybe<UpdateEventInput>;
  id: Scalars['ID'];
};


export type MutationUpdateTicketArgs = {
  data?: Maybe<UpdateTicketInput>;
  id: Scalars['ID'];
};


export type MutationVerifyCommunityArgs = {
  id: Scalars['ID'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type PersonalDataUpdateInput = {
  fullName: Scalars['String'];
  birthDate?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  communities?: Maybe<Array<Community>>;
  community?: Maybe<Community>;
  communityMember?: Maybe<CommunityMember>;
  communityMembers?: Maybe<Array<CommunityMember>>;
  currentUser?: Maybe<User>;
  event?: Maybe<Event>;
  events?: Maybe<Array<Event>>;
  followingCommunities?: Maybe<Array<Community>>;
  getFile: File;
  getMultipleFiles: Array<File>;
  monthlyEvent?: Maybe<Array<Event>>;
  ticket?: Maybe<Ticket>;
  tickets?: Maybe<Array<Ticket>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryCommunitiesArgs = {
  filter: FilterInput;
};


export type QueryCommunityArgs = {
  id: Scalars['ID'];
};


export type QueryCommunityMemberArgs = {
  id: Scalars['ID'];
};


export type QueryCommunityMembersArgs = {
  filter: FilterInput;
  communityId: Scalars['ID'];
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  filter: FilterInput;
};


export type QueryFollowingCommunitiesArgs = {
  filter: FilterInput;
};


export type QueryGetFileArgs = {
  fileId: Scalars['ID'];
};


export type QueryGetMultipleFilesArgs = {
  filesIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryMonthlyEventArgs = {
  filter: FilterInput;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
};


export type QueryTicketArgs = {
  id: Scalars['ID'];
};


export type QueryTicketsArgs = {
  filter: FilterInput;
  eventId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter: FilterInput;
};

export type SecurityDataUpdateInput = {
  oldPassword: Scalars['String'];
  password: Scalars['String'];
  device: Scalars['String'];
};

export type SignUpInput = {
  fullName: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  userName: Scalars['String'];
  birthDate?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  device: Scalars['String'];
};

export type SocailDataUpdateInput = {
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
};

export enum TablesName {
  User = 'User',
  Community = 'Community',
  Event = 'Event'
}

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['ID'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
  community?: Maybe<Community>;
  communityId: Scalars['ID'];
  event?: Maybe<Event>;
  eventId: Scalars['ID'];
  price: Scalars['Float'];
  used?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateCommunityInput = {
  communityName: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
  category: Scalars['String'];
};

export type UpdateCommunityMemberInput = {
  userId: Scalars['ID'];
  communityId: Scalars['ID'];
  admin?: Maybe<Scalars['Boolean']>;
  banned?: Maybe<Scalars['Boolean']>;
};

export type UpdateEventInput = {
  communityId: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  eventStartDate: Scalars['String'];
  eventEndDate: Scalars['String'];
  category: Scalars['String'];
  location: Scalars['String'];
  price: Scalars['Int'];
};

export type UpdateTicketInput = {
  userId: Scalars['ID'];
  eventId: Scalars['ID'];
  price: Scalars['Float'];
  used?: Maybe<Scalars['Boolean']>;
};



export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  fullName: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  userName: Scalars['String'];
  avatar?: Maybe<File>;
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  gender: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AccountDataUpdateInput: ResolverTypeWrapper<Partial<AccountDataUpdateInput>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  Category: ResolverTypeWrapper<Partial<Category>>;
  Community: ResolverTypeWrapper<Partial<Community>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  CommunityMember: ResolverTypeWrapper<Partial<CommunityMember>>;
  CommunityStatus: ResolverTypeWrapper<Partial<CommunityStatus>>;
  CreateCommunityInput: ResolverTypeWrapper<Partial<CreateCommunityInput>>;
  CreateCommunityMemberInput: ResolverTypeWrapper<Partial<CreateCommunityMemberInput>>;
  CreateEventInput: ResolverTypeWrapper<Partial<CreateEventInput>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  CreateTicketInput: ResolverTypeWrapper<Partial<CreateTicketInput>>;
  Float: ResolverTypeWrapper<Partial<Scalars['Float']>>;
  DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']>>;
  Event: ResolverTypeWrapper<Partial<Event>>;
  File: ResolverTypeWrapper<Partial<File>>;
  FilterInput: ResolverTypeWrapper<Partial<FilterInput>>;
  FilterOrder: ResolverTypeWrapper<Partial<FilterOrder>>;
  FilterOrderType: ResolverTypeWrapper<Partial<FilterOrderType>>;
  Gender: ResolverTypeWrapper<Partial<Gender>>;
  JSON: ResolverTypeWrapper<Partial<Scalars['JSON']>>;
  LoginInput: ResolverTypeWrapper<Partial<LoginInput>>;
  Mutation: ResolverTypeWrapper<{}>;
  PersonalDataUpdateInput: ResolverTypeWrapper<Partial<PersonalDataUpdateInput>>;
  Query: ResolverTypeWrapper<{}>;
  SecurityDataUpdateInput: ResolverTypeWrapper<Partial<SecurityDataUpdateInput>>;
  SignUpInput: ResolverTypeWrapper<Partial<SignUpInput>>;
  SocailDataUpdateInput: ResolverTypeWrapper<Partial<SocailDataUpdateInput>>;
  TablesName: ResolverTypeWrapper<Partial<TablesName>>;
  Ticket: ResolverTypeWrapper<Partial<Ticket>>;
  UpdateCommunityInput: ResolverTypeWrapper<Partial<UpdateCommunityInput>>;
  UpdateCommunityMemberInput: ResolverTypeWrapper<Partial<UpdateCommunityMemberInput>>;
  UpdateEventInput: ResolverTypeWrapper<Partial<UpdateEventInput>>;
  UpdateTicketInput: ResolverTypeWrapper<Partial<UpdateTicketInput>>;
  Upload: ResolverTypeWrapper<Partial<Scalars['Upload']>>;
  Uploads: ResolverTypeWrapper<Partial<Scalars['Uploads']>>;
  User: ResolverTypeWrapper<Partial<User>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AccountDataUpdateInput: Partial<AccountDataUpdateInput>;
  String: Partial<Scalars['String']>;
  Community: Partial<Community>;
  ID: Partial<Scalars['ID']>;
  Boolean: Partial<Scalars['Boolean']>;
  CommunityMember: Partial<CommunityMember>;
  CreateCommunityInput: Partial<CreateCommunityInput>;
  CreateCommunityMemberInput: Partial<CreateCommunityMemberInput>;
  CreateEventInput: Partial<CreateEventInput>;
  Int: Partial<Scalars['Int']>;
  CreateTicketInput: Partial<CreateTicketInput>;
  Float: Partial<Scalars['Float']>;
  DateTime: Partial<Scalars['DateTime']>;
  Event: Partial<Event>;
  File: Partial<File>;
  FilterInput: Partial<FilterInput>;
  JSON: Partial<Scalars['JSON']>;
  LoginInput: Partial<LoginInput>;
  Mutation: {};
  PersonalDataUpdateInput: Partial<PersonalDataUpdateInput>;
  Query: {};
  SecurityDataUpdateInput: Partial<SecurityDataUpdateInput>;
  SignUpInput: Partial<SignUpInput>;
  SocailDataUpdateInput: Partial<SocailDataUpdateInput>;
  Ticket: Partial<Ticket>;
  UpdateCommunityInput: Partial<UpdateCommunityInput>;
  UpdateCommunityMemberInput: Partial<UpdateCommunityMemberInput>;
  UpdateEventInput: Partial<UpdateEventInput>;
  UpdateTicketInput: Partial<UpdateTicketInput>;
  Upload: Partial<Scalars['Upload']>;
  Uploads: Partial<Scalars['Uploads']>;
  User: Partial<User>;
}>;

export type CommunityResolvers<ContextType = context, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  communityName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  influencer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  artist?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommunityMemberResolvers<ContextType = context, ParentType extends ResolversParentTypes['CommunityMember'] = ResolversParentTypes['CommunityMember']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  communityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  admin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  banned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EventResolvers<ContextType = context, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  communityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  eventStartDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  eventEndDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  horizontal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tickets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ticket']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileResolvers<ContextType = context, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  accountDataUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAccountDataUpdateArgs, never>>;
  addCommunityMember?: Resolver<ResolversTypes['CommunityMember'], ParentType, ContextType, RequireFields<MutationAddCommunityMemberArgs, never>>;
  createCommunity?: Resolver<ResolversTypes['Community'], ParentType, ContextType, RequireFields<MutationCreateCommunityArgs, never>>;
  createEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationCreateEventArgs, never>>;
  createTicket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<MutationCreateTicketArgs, never>>;
  deactivateCommunity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeactivateCommunityArgs, 'id'>>;
  deleteCommunity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCommunityArgs, 'id'>>;
  deleteEvent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteEventArgs, 'id'>>;
  deleteTicket?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteTicketArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginArgs, never>>;
  multipleUpload?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, never>>;
  personalDataUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPersonalDataUpdateArgs, never>>;
  privateCommunity?: Resolver<ResolversTypes['Community'], ParentType, ContextType, RequireFields<MutationPrivateCommunityArgs, 'id'>>;
  profileUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationProfileUpdateArgs, 'uploadFileId'>>;
  removeCommunityMember?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveCommunityMemberArgs, 'id'>>;
  removeUpload?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveUploadArgs, never>>;
  securityDataUpdate?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationSecurityDataUpdateArgs, never>>;
  signUp?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSignUpArgs, never>>;
  singleUpload?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationSingleUploadArgs, 'file'>>;
  socailDataUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSocailDataUpdateArgs, never>>;
  statusUpdate?: Resolver<ResolversTypes['Community'], ParentType, ContextType, RequireFields<MutationStatusUpdateArgs, 'id' | 'status'>>;
  updateCommunity?: Resolver<ResolversTypes['Community'], ParentType, ContextType, RequireFields<MutationUpdateCommunityArgs, 'id'>>;
  updateCommunityMember?: Resolver<ResolversTypes['CommunityMember'], ParentType, ContextType, RequireFields<MutationUpdateCommunityMemberArgs, 'id'>>;
  updateEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'id'>>;
  updateTicket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<MutationUpdateTicketArgs, 'id'>>;
  verifyCommunity?: Resolver<ResolversTypes['Community'], ParentType, ContextType, RequireFields<MutationVerifyCommunityArgs, 'id'>>;
}>;

export type QueryResolvers<ContextType = context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  communities?: Resolver<Maybe<Array<ResolversTypes['Community']>>, ParentType, ContextType, RequireFields<QueryCommunitiesArgs, 'filter'>>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<QueryCommunityArgs, 'id'>>;
  communityMember?: Resolver<Maybe<ResolversTypes['CommunityMember']>, ParentType, ContextType, RequireFields<QueryCommunityMemberArgs, 'id'>>;
  communityMembers?: Resolver<Maybe<Array<ResolversTypes['CommunityMember']>>, ParentType, ContextType, RequireFields<QueryCommunityMembersArgs, 'filter' | 'communityId'>>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id'>>;
  events?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'filter'>>;
  followingCommunities?: Resolver<Maybe<Array<ResolversTypes['Community']>>, ParentType, ContextType, RequireFields<QueryFollowingCommunitiesArgs, 'filter'>>;
  getFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<QueryGetFileArgs, 'fileId'>>;
  getMultipleFiles?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryGetMultipleFilesArgs, never>>;
  monthlyEvent?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType, RequireFields<QueryMonthlyEventArgs, 'filter'>>;
  ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<QueryTicketArgs, 'id'>>;
  tickets?: Resolver<Maybe<Array<ResolversTypes['Ticket']>>, ParentType, ContextType, RequireFields<QueryTicketsArgs, 'filter' | 'eventId'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'filter'>>;
}>;

export type TicketResolvers<ContextType = context, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  communityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  used?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export interface UploadsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Uploads'], any> {
  name: 'Uploads';
}

export type UserResolvers<ContextType = context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telegram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = context> = ResolversObject<{
  Community?: CommunityResolvers<ContextType>;
  CommunityMember?: CommunityMemberResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Event?: EventResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  Uploads?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = context> = Resolvers<ContextType>;
