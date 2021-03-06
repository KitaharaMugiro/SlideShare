import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

/** columns and relationships of "Board" */
export type Board = {
  __typename?: 'Board';
  CreatedAt: Scalars['timestamptz'];
  Id: Scalars['Int'];
  UpdatedAt: Scalars['timestamptz'];
  /** An array relationship */
  board_notes: Array<Note>;
};


/** columns and relationships of "Board" */
export type BoardBoard_NotesArgs = {
  distinct_on?: Maybe<Array<Note_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_Order_By>>;
  where?: Maybe<Note_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Board". All fields are combined with a logical 'AND'. */
export type Board_Bool_Exp = {
  CreatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  Id?: Maybe<Int_Comparison_Exp>;
  UpdatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  _and?: Maybe<Array<Board_Bool_Exp>>;
  _not?: Maybe<Board_Bool_Exp>;
  _or?: Maybe<Array<Board_Bool_Exp>>;
  board_notes?: Maybe<Note_Bool_Exp>;
};

/** Ordering options when selecting data from "Board". */
export type Board_Order_By = {
  CreatedAt?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  UpdatedAt?: Maybe<Order_By>;
  board_notes_aggregate?: Maybe<Note_Aggregate_Order_By>;
};

/** select columns of table "Board" */
export enum Board_Select_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Id = 'Id',
  /** column name */
  UpdatedAt = 'UpdatedAt'
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type GenerateAgoraTokenInput = {
  channelName: Scalars['String'];
  host: Scalars['String'];
  uid?: Maybe<Scalars['String']>;
};

export type GenerateAgoraTokenOutput = {
  __typename?: 'GenerateAgoraTokenOutput';
  token?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
};

/** columns and relationships of "Note" */
export type Note = {
  __typename?: 'Note';
  BoardId: Scalars['Int'];
  Color?: Maybe<Scalars['bigint']>;
  CreatedAt: Scalars['timestamp'];
  CreatedBy?: Maybe<Scalars['String']>;
  Id: Scalars['Int'];
  PostedBy: Scalars['String'];
  Text: Scalars['String'];
  UpdatedAt?: Maybe<Scalars['timestamptz']>;
  X?: Maybe<Scalars['numeric']>;
  Y?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  note_board?: Maybe<Board>;
};

/** order by aggregate values of table "Note" */
export type Note_Aggregate_Order_By = {
  avg?: Maybe<Note_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Note_Max_Order_By>;
  min?: Maybe<Note_Min_Order_By>;
  stddev?: Maybe<Note_Stddev_Order_By>;
  stddev_pop?: Maybe<Note_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Note_Stddev_Samp_Order_By>;
  sum?: Maybe<Note_Sum_Order_By>;
  var_pop?: Maybe<Note_Var_Pop_Order_By>;
  var_samp?: Maybe<Note_Var_Samp_Order_By>;
  variance?: Maybe<Note_Variance_Order_By>;
};

/** order by avg() on columns of table "Note" */
export type Note_Avg_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Note". All fields are combined with a logical 'AND'. */
export type Note_Bool_Exp = {
  BoardId?: Maybe<Int_Comparison_Exp>;
  Color?: Maybe<Bigint_Comparison_Exp>;
  CreatedAt?: Maybe<Timestamp_Comparison_Exp>;
  CreatedBy?: Maybe<String_Comparison_Exp>;
  Id?: Maybe<Int_Comparison_Exp>;
  PostedBy?: Maybe<String_Comparison_Exp>;
  Text?: Maybe<String_Comparison_Exp>;
  UpdatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  X?: Maybe<Numeric_Comparison_Exp>;
  Y?: Maybe<Numeric_Comparison_Exp>;
  _and?: Maybe<Array<Note_Bool_Exp>>;
  _not?: Maybe<Note_Bool_Exp>;
  _or?: Maybe<Array<Note_Bool_Exp>>;
  note_board?: Maybe<Board_Bool_Exp>;
};

/** unique or primary key constraints on table "Note" */
export enum Note_Constraint {
  /** unique or primary key constraint */
  NotePkey = 'Note_pkey'
}

/** input type for incrementing numeric columns in table "Note" */
export type Note_Inc_Input = {
  Color?: Maybe<Scalars['bigint']>;
  X?: Maybe<Scalars['numeric']>;
  Y?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Note" */
export type Note_Insert_Input = {
  BoardId?: Maybe<Scalars['Int']>;
  Color?: Maybe<Scalars['bigint']>;
  PostedBy?: Maybe<Scalars['String']>;
  Text?: Maybe<Scalars['String']>;
  X?: Maybe<Scalars['numeric']>;
  Y?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "Note" */
export type Note_Max_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  CreatedAt?: Maybe<Order_By>;
  CreatedBy?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  PostedBy?: Maybe<Order_By>;
  Text?: Maybe<Order_By>;
  UpdatedAt?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** order by min() on columns of table "Note" */
export type Note_Min_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  CreatedAt?: Maybe<Order_By>;
  CreatedBy?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  PostedBy?: Maybe<Order_By>;
  Text?: Maybe<Order_By>;
  UpdatedAt?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** response of any mutation on the table "Note" */
export type Note_Mutation_Response = {
  __typename?: 'Note_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Note>;
};

/** on conflict condition type for table "Note" */
export type Note_On_Conflict = {
  constraint: Note_Constraint;
  update_columns?: Array<Note_Update_Column>;
  where?: Maybe<Note_Bool_Exp>;
};

/** Ordering options when selecting data from "Note". */
export type Note_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  CreatedAt?: Maybe<Order_By>;
  CreatedBy?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  PostedBy?: Maybe<Order_By>;
  Text?: Maybe<Order_By>;
  UpdatedAt?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
  note_board?: Maybe<Board_Order_By>;
};

/** primary key columns input for table: Note */
export type Note_Pk_Columns_Input = {
  Id: Scalars['Int'];
};

/** select columns of table "Note" */
export enum Note_Select_Column {
  /** column name */
  BoardId = 'BoardId',
  /** column name */
  Color = 'Color',
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  CreatedBy = 'CreatedBy',
  /** column name */
  Id = 'Id',
  /** column name */
  PostedBy = 'PostedBy',
  /** column name */
  Text = 'Text',
  /** column name */
  UpdatedAt = 'UpdatedAt',
  /** column name */
  X = 'X',
  /** column name */
  Y = 'Y'
}

/** input type for updating data in table "Note" */
export type Note_Set_Input = {
  Color?: Maybe<Scalars['bigint']>;
  Text?: Maybe<Scalars['String']>;
  X?: Maybe<Scalars['numeric']>;
  Y?: Maybe<Scalars['numeric']>;
};

/** order by stddev() on columns of table "Note" */
export type Note_Stddev_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Note" */
export type Note_Stddev_Pop_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Note" */
export type Note_Stddev_Samp_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** order by sum() on columns of table "Note" */
export type Note_Sum_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** update columns of table "Note" */
export enum Note_Update_Column {
  /** column name */
  Color = 'Color',
  /** column name */
  Text = 'Text',
  /** column name */
  X = 'X',
  /** column name */
  Y = 'Y'
}

/** order by var_pop() on columns of table "Note" */
export type Note_Var_Pop_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "Note" */
export type Note_Var_Samp_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

/** order by variance() on columns of table "Note" */
export type Note_Variance_Order_By = {
  BoardId?: Maybe<Order_By>;
  Color?: Maybe<Order_By>;
  Id?: Maybe<Order_By>;
  X?: Maybe<Order_By>;
  Y?: Maybe<Order_By>;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type UploadPdfOutput = {
  __typename?: 'UploadPdfOutput';
  slideId: Scalars['Int'];
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  GenerateAgoraToken?: Maybe<GenerateAgoraTokenOutput>;
  actionName?: Maybe<SampleOutput>;
  /** delete data from the table: "Note" */
  delete_Note?: Maybe<Note_Mutation_Response>;
  /** delete single row from the table: "Note" */
  delete_Note_by_pk?: Maybe<Note>;
  /** delete data from the table: "slideshare.Bookmark" */
  delete_slideshare_Bookmark?: Maybe<Slideshare_Bookmark_Mutation_Response>;
  /** delete single row from the table: "slideshare.Bookmark" */
  delete_slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** delete data from the table: "slideshare.Comment" */
  delete_slideshare_Comment?: Maybe<Slideshare_Comment_Mutation_Response>;
  /** delete single row from the table: "slideshare.Comment" */
  delete_slideshare_Comment_by_pk?: Maybe<Slideshare_Comment>;
  /** delete data from the table: "slideshare.Conference" */
  delete_slideshare_Conference?: Maybe<Slideshare_Conference_Mutation_Response>;
  /** delete single row from the table: "slideshare.Conference" */
  delete_slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** delete data from the table: "slideshare.File" */
  delete_slideshare_File?: Maybe<Slideshare_File_Mutation_Response>;
  /** delete single row from the table: "slideshare.File" */
  delete_slideshare_File_by_pk?: Maybe<Slideshare_File>;
  /** delete data from the table: "slideshare.Follower" */
  delete_slideshare_Follower?: Maybe<Slideshare_Follower_Mutation_Response>;
  /** delete single row from the table: "slideshare.Follower" */
  delete_slideshare_Follower_by_pk?: Maybe<Slideshare_Follower>;
  /** delete data from the table: "slideshare.Page" */
  delete_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** delete single row from the table: "slideshare.Page" */
  delete_slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** delete data from the table: "slideshare.Poll" */
  delete_slideshare_Poll?: Maybe<Slideshare_Poll_Mutation_Response>;
  /** delete single row from the table: "slideshare.Poll" */
  delete_slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** delete data from the table: "slideshare.Room" */
  delete_slideshare_Room?: Maybe<Slideshare_Room_Mutation_Response>;
  /** delete data from the table: "slideshare.RoomParticipant" */
  delete_slideshare_RoomParticipant?: Maybe<Slideshare_RoomParticipant_Mutation_Response>;
  /** delete single row from the table: "slideshare.RoomParticipant" */
  delete_slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** delete single row from the table: "slideshare.Room" */
  delete_slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** delete data from the table: "slideshare.Slide" */
  delete_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** delete data from the table: "slideshare.SlideRecord" */
  delete_slideshare_SlideRecord?: Maybe<Slideshare_SlideRecord_Mutation_Response>;
  /** delete single row from the table: "slideshare.SlideRecord" */
  delete_slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** delete single row from the table: "slideshare.Slide" */
  delete_slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
  /** insert data into the table: "Note" */
  insert_Note?: Maybe<Note_Mutation_Response>;
  /** insert a single row into the table: "Note" */
  insert_Note_one?: Maybe<Note>;
  /** insert data into the table: "slideshare.Bookmark" */
  insert_slideshare_Bookmark?: Maybe<Slideshare_Bookmark_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Bookmark" */
  insert_slideshare_Bookmark_one?: Maybe<Slideshare_Bookmark>;
  /** insert data into the table: "slideshare.Comment" */
  insert_slideshare_Comment?: Maybe<Slideshare_Comment_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Comment" */
  insert_slideshare_Comment_one?: Maybe<Slideshare_Comment>;
  /** insert data into the table: "slideshare.Conference" */
  insert_slideshare_Conference?: Maybe<Slideshare_Conference_Mutation_Response>;
  /** insert data into the table: "slideshare.ConferenceSubscriber" */
  insert_slideshare_ConferenceSubscriber?: Maybe<Slideshare_ConferenceSubscriber_Mutation_Response>;
  /** insert a single row into the table: "slideshare.ConferenceSubscriber" */
  insert_slideshare_ConferenceSubscriber_one?: Maybe<Slideshare_ConferenceSubscriber>;
  /** insert a single row into the table: "slideshare.Conference" */
  insert_slideshare_Conference_one?: Maybe<Slideshare_Conference>;
  /** insert data into the table: "slideshare.File" */
  insert_slideshare_File?: Maybe<Slideshare_File_Mutation_Response>;
  /** insert a single row into the table: "slideshare.File" */
  insert_slideshare_File_one?: Maybe<Slideshare_File>;
  /** insert data into the table: "slideshare.Follower" */
  insert_slideshare_Follower?: Maybe<Slideshare_Follower_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Follower" */
  insert_slideshare_Follower_one?: Maybe<Slideshare_Follower>;
  /** insert data into the table: "slideshare.Page" */
  insert_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Page" */
  insert_slideshare_Page_one?: Maybe<Slideshare_Page>;
  /** insert data into the table: "slideshare.Poll" */
  insert_slideshare_Poll?: Maybe<Slideshare_Poll_Mutation_Response>;
  /** insert data into the table: "slideshare.PollResult" */
  insert_slideshare_PollResult?: Maybe<Slideshare_PollResult_Mutation_Response>;
  /** insert a single row into the table: "slideshare.PollResult" */
  insert_slideshare_PollResult_one?: Maybe<Slideshare_PollResult>;
  /** insert a single row into the table: "slideshare.Poll" */
  insert_slideshare_Poll_one?: Maybe<Slideshare_Poll>;
  /** insert data into the table: "slideshare.Profile" */
  insert_slideshare_Profile?: Maybe<Slideshare_Profile_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Profile" */
  insert_slideshare_Profile_one?: Maybe<Slideshare_Profile>;
  /** insert data into the table: "slideshare.Room" */
  insert_slideshare_Room?: Maybe<Slideshare_Room_Mutation_Response>;
  /** insert data into the table: "slideshare.RoomParticipant" */
  insert_slideshare_RoomParticipant?: Maybe<Slideshare_RoomParticipant_Mutation_Response>;
  /** insert a single row into the table: "slideshare.RoomParticipant" */
  insert_slideshare_RoomParticipant_one?: Maybe<Slideshare_RoomParticipant>;
  /** insert a single row into the table: "slideshare.Room" */
  insert_slideshare_Room_one?: Maybe<Slideshare_Room>;
  /** insert data into the table: "slideshare.Slide" */
  insert_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** insert data into the table: "slideshare.SlideRecord" */
  insert_slideshare_SlideRecord?: Maybe<Slideshare_SlideRecord_Mutation_Response>;
  /** insert data into the table: "slideshare.SlideRecordPiece" */
  insert_slideshare_SlideRecordPiece?: Maybe<Slideshare_SlideRecordPiece_Mutation_Response>;
  /** insert a single row into the table: "slideshare.SlideRecordPiece" */
  insert_slideshare_SlideRecordPiece_one?: Maybe<Slideshare_SlideRecordPiece>;
  /** insert a single row into the table: "slideshare.SlideRecord" */
  insert_slideshare_SlideRecord_one?: Maybe<Slideshare_SlideRecord>;
  /** insert a single row into the table: "slideshare.Slide" */
  insert_slideshare_Slide_one?: Maybe<Slideshare_Slide>;
  subscribe?: Maybe<Message>;
  /** update data of the table: "Note" */
  update_Note?: Maybe<Note_Mutation_Response>;
  /** update single row of the table: "Note" */
  update_Note_by_pk?: Maybe<Note>;
  /** update data of the table: "slideshare.Bookmark" */
  update_slideshare_Bookmark?: Maybe<Slideshare_Bookmark_Mutation_Response>;
  /** update single row of the table: "slideshare.Bookmark" */
  update_slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** update data of the table: "slideshare.Conference" */
  update_slideshare_Conference?: Maybe<Slideshare_Conference_Mutation_Response>;
  /** update single row of the table: "slideshare.Conference" */
  update_slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** update data of the table: "slideshare.Page" */
  update_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** update single row of the table: "slideshare.Page" */
  update_slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** update data of the table: "slideshare.Poll" */
  update_slideshare_Poll?: Maybe<Slideshare_Poll_Mutation_Response>;
  /** update data of the table: "slideshare.PollResult" */
  update_slideshare_PollResult?: Maybe<Slideshare_PollResult_Mutation_Response>;
  /** update single row of the table: "slideshare.PollResult" */
  update_slideshare_PollResult_by_pk?: Maybe<Slideshare_PollResult>;
  /** update single row of the table: "slideshare.Poll" */
  update_slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** update data of the table: "slideshare.Profile" */
  update_slideshare_Profile?: Maybe<Slideshare_Profile_Mutation_Response>;
  /** update single row of the table: "slideshare.Profile" */
  update_slideshare_Profile_by_pk?: Maybe<Slideshare_Profile>;
  /** update data of the table: "slideshare.Room" */
  update_slideshare_Room?: Maybe<Slideshare_Room_Mutation_Response>;
  /** update data of the table: "slideshare.RoomParticipant" */
  update_slideshare_RoomParticipant?: Maybe<Slideshare_RoomParticipant_Mutation_Response>;
  /** update single row of the table: "slideshare.RoomParticipant" */
  update_slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** update single row of the table: "slideshare.Room" */
  update_slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** update data of the table: "slideshare.Slide" */
  update_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** update data of the table: "slideshare.SlideRecord" */
  update_slideshare_SlideRecord?: Maybe<Slideshare_SlideRecord_Mutation_Response>;
  /** update single row of the table: "slideshare.SlideRecord" */
  update_slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** update single row of the table: "slideshare.Slide" */
  update_slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
  /** PDF???PNG????????????Page????????? */
  uploadPdf?: Maybe<UploadPdfOutput>;
};


/** mutation root */
export type Mutation_RootGenerateAgoraTokenArgs = {
  input: GenerateAgoraTokenInput;
};


/** mutation root */
export type Mutation_RootActionNameArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootDelete_NoteArgs = {
  where: Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Note_By_PkArgs = {
  Id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_BookmarkArgs = {
  where: Slideshare_Bookmark_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Bookmark_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_CommentArgs = {
  where: Slideshare_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_ConferenceArgs = {
  where: Slideshare_Conference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Conference_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_FileArgs = {
  where: Slideshare_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_File_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_FollowerArgs = {
  where: Slideshare_Follower_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Follower_By_PkArgs = {
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_PageArgs = {
  where: Slideshare_Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Page_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_PollArgs = {
  where: Slideshare_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Poll_By_PkArgs = {
  pageId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_RoomArgs = {
  where: Slideshare_Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_RoomParticipantArgs = {
  where: Slideshare_RoomParticipant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_RoomParticipant_By_PkArgs = {
  userId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Room_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_SlideArgs = {
  where: Slideshare_Slide_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_SlideRecordArgs = {
  where: Slideshare_SlideRecord_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_SlideRecord_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Slide_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_NoteArgs = {
  objects: Array<Note_Insert_Input>;
  on_conflict?: Maybe<Note_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Note_OneArgs = {
  object: Note_Insert_Input;
  on_conflict?: Maybe<Note_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_BookmarkArgs = {
  objects: Array<Slideshare_Bookmark_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Bookmark_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Bookmark_OneArgs = {
  object: Slideshare_Bookmark_Insert_Input;
  on_conflict?: Maybe<Slideshare_Bookmark_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_CommentArgs = {
  objects: Array<Slideshare_Comment_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Comment_OneArgs = {
  object: Slideshare_Comment_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ConferenceArgs = {
  objects: Array<Slideshare_Conference_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Conference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ConferenceSubscriberArgs = {
  objects: Array<Slideshare_ConferenceSubscriber_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ConferenceSubscriber_OneArgs = {
  object: Slideshare_ConferenceSubscriber_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Conference_OneArgs = {
  object: Slideshare_Conference_Insert_Input;
  on_conflict?: Maybe<Slideshare_Conference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_FileArgs = {
  objects: Array<Slideshare_File_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_File_OneArgs = {
  object: Slideshare_File_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_FollowerArgs = {
  objects: Array<Slideshare_Follower_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Follower_OneArgs = {
  object: Slideshare_Follower_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PageArgs = {
  objects: Array<Slideshare_Page_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Page_OneArgs = {
  object: Slideshare_Page_Insert_Input;
  on_conflict?: Maybe<Slideshare_Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PollArgs = {
  objects: Array<Slideshare_Poll_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PollResultArgs = {
  objects: Array<Slideshare_PollResult_Insert_Input>;
  on_conflict?: Maybe<Slideshare_PollResult_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_PollResult_OneArgs = {
  object: Slideshare_PollResult_Insert_Input;
  on_conflict?: Maybe<Slideshare_PollResult_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Poll_OneArgs = {
  object: Slideshare_Poll_Insert_Input;
  on_conflict?: Maybe<Slideshare_Poll_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_ProfileArgs = {
  objects: Array<Slideshare_Profile_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Profile_OneArgs = {
  object: Slideshare_Profile_Insert_Input;
  on_conflict?: Maybe<Slideshare_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_RoomArgs = {
  objects: Array<Slideshare_Room_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_RoomParticipantArgs = {
  objects: Array<Slideshare_RoomParticipant_Insert_Input>;
  on_conflict?: Maybe<Slideshare_RoomParticipant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_RoomParticipant_OneArgs = {
  object: Slideshare_RoomParticipant_Insert_Input;
  on_conflict?: Maybe<Slideshare_RoomParticipant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Room_OneArgs = {
  object: Slideshare_Room_Insert_Input;
  on_conflict?: Maybe<Slideshare_Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideArgs = {
  objects: Array<Slideshare_Slide_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Slide_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecordArgs = {
  objects: Array<Slideshare_SlideRecord_Insert_Input>;
  on_conflict?: Maybe<Slideshare_SlideRecord_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecordPieceArgs = {
  objects: Array<Slideshare_SlideRecordPiece_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecordPiece_OneArgs = {
  object: Slideshare_SlideRecordPiece_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_SlideRecord_OneArgs = {
  object: Slideshare_SlideRecord_Insert_Input;
  on_conflict?: Maybe<Slideshare_SlideRecord_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Slide_OneArgs = {
  object: Slideshare_Slide_Insert_Input;
  on_conflict?: Maybe<Slideshare_Slide_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSubscribeArgs = {
  conferenceId?: Maybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootUpdate_NoteArgs = {
  _inc?: Maybe<Note_Inc_Input>;
  _set?: Maybe<Note_Set_Input>;
  where: Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Note_By_PkArgs = {
  _inc?: Maybe<Note_Inc_Input>;
  _set?: Maybe<Note_Set_Input>;
  pk_columns: Note_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_BookmarkArgs = {
  _inc?: Maybe<Slideshare_Bookmark_Inc_Input>;
  _set?: Maybe<Slideshare_Bookmark_Set_Input>;
  where: Slideshare_Bookmark_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Bookmark_By_PkArgs = {
  _inc?: Maybe<Slideshare_Bookmark_Inc_Input>;
  _set?: Maybe<Slideshare_Bookmark_Set_Input>;
  pk_columns: Slideshare_Bookmark_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_ConferenceArgs = {
  _inc?: Maybe<Slideshare_Conference_Inc_Input>;
  _set?: Maybe<Slideshare_Conference_Set_Input>;
  where: Slideshare_Conference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Conference_By_PkArgs = {
  _inc?: Maybe<Slideshare_Conference_Inc_Input>;
  _set?: Maybe<Slideshare_Conference_Set_Input>;
  pk_columns: Slideshare_Conference_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PageArgs = {
  _inc?: Maybe<Slideshare_Page_Inc_Input>;
  _set?: Maybe<Slideshare_Page_Set_Input>;
  where: Slideshare_Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Page_By_PkArgs = {
  _inc?: Maybe<Slideshare_Page_Inc_Input>;
  _set?: Maybe<Slideshare_Page_Set_Input>;
  pk_columns: Slideshare_Page_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PollArgs = {
  _set?: Maybe<Slideshare_Poll_Set_Input>;
  where: Slideshare_Poll_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PollResultArgs = {
  _inc?: Maybe<Slideshare_PollResult_Inc_Input>;
  _set?: Maybe<Slideshare_PollResult_Set_Input>;
  where: Slideshare_PollResult_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_PollResult_By_PkArgs = {
  _inc?: Maybe<Slideshare_PollResult_Inc_Input>;
  _set?: Maybe<Slideshare_PollResult_Set_Input>;
  pk_columns: Slideshare_PollResult_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Poll_By_PkArgs = {
  _set?: Maybe<Slideshare_Poll_Set_Input>;
  pk_columns: Slideshare_Poll_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_ProfileArgs = {
  _set?: Maybe<Slideshare_Profile_Set_Input>;
  where: Slideshare_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Profile_By_PkArgs = {
  _set?: Maybe<Slideshare_Profile_Set_Input>;
  pk_columns: Slideshare_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_RoomArgs = {
  _inc?: Maybe<Slideshare_Room_Inc_Input>;
  _set?: Maybe<Slideshare_Room_Set_Input>;
  where: Slideshare_Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_RoomParticipantArgs = {
  _inc?: Maybe<Slideshare_RoomParticipant_Inc_Input>;
  _set?: Maybe<Slideshare_RoomParticipant_Set_Input>;
  where: Slideshare_RoomParticipant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_RoomParticipant_By_PkArgs = {
  _inc?: Maybe<Slideshare_RoomParticipant_Inc_Input>;
  _set?: Maybe<Slideshare_RoomParticipant_Set_Input>;
  pk_columns: Slideshare_RoomParticipant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Room_By_PkArgs = {
  _inc?: Maybe<Slideshare_Room_Inc_Input>;
  _set?: Maybe<Slideshare_Room_Set_Input>;
  pk_columns: Slideshare_Room_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_SlideArgs = {
  _set?: Maybe<Slideshare_Slide_Set_Input>;
  where: Slideshare_Slide_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_SlideRecordArgs = {
  _inc?: Maybe<Slideshare_SlideRecord_Inc_Input>;
  _set?: Maybe<Slideshare_SlideRecord_Set_Input>;
  where: Slideshare_SlideRecord_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_SlideRecord_By_PkArgs = {
  _inc?: Maybe<Slideshare_SlideRecord_Inc_Input>;
  _set?: Maybe<Slideshare_SlideRecord_Set_Input>;
  pk_columns: Slideshare_SlideRecord_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Slide_By_PkArgs = {
  _set?: Maybe<Slideshare_Slide_Set_Input>;
  pk_columns: Slideshare_Slide_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUploadPdfArgs = {
  pdfName: Scalars['String'];
  slideId: Scalars['Int'];
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Board" */
  Board: Array<Board>;
  /** fetch data from the table: "Board" using primary key columns */
  Board_by_pk?: Maybe<Board>;
  /** fetch data from the table: "Note" */
  Note: Array<Note>;
  /** fetch data from the table: "Note" using primary key columns */
  Note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "slideshare.Bookmark" */
  slideshare_Bookmark: Array<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Bookmark" using primary key columns */
  slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Comment" */
  slideshare_Comment: Array<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Comment" using primary key columns */
  slideshare_Comment_by_pk?: Maybe<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Conference" */
  slideshare_Conference: Array<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" */
  slideshare_ConferenceSubscriber: Array<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" using primary key columns */
  slideshare_ConferenceSubscriber_by_pk?: Maybe<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.Conference" using primary key columns */
  slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.File" */
  slideshare_File: Array<Slideshare_File>;
  /** fetch data from the table: "slideshare.File" using primary key columns */
  slideshare_File_by_pk?: Maybe<Slideshare_File>;
  /** fetch data from the table: "slideshare.Follower" */
  slideshare_Follower: Array<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Follower" using primary key columns */
  slideshare_Follower_by_pk?: Maybe<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Page" */
  slideshare_Page: Array<Slideshare_Page>;
  /** fetch data from the table: "slideshare.PageType" */
  slideshare_PageType: Array<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.PageType" using primary key columns */
  slideshare_PageType_by_pk?: Maybe<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.Page" using primary key columns */
  slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** fetch data from the table: "slideshare.Poll" */
  slideshare_Poll: Array<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.PollResult" */
  slideshare_PollResult: Array<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.PollResult" using primary key columns */
  slideshare_PollResult_by_pk?: Maybe<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.Poll" using primary key columns */
  slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.Profile" */
  slideshare_Profile: Array<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Profile" using primary key columns */
  slideshare_Profile_by_pk?: Maybe<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Room" */
  slideshare_Room: Array<Slideshare_Room>;
  /** fetch data from the table: "slideshare.RoomParticipant" */
  slideshare_RoomParticipant: Array<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.RoomParticipant" using primary key columns */
  slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.Room" using primary key columns */
  slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** fetch data from the table: "slideshare.Slide" */
  slideshare_Slide: Array<Slideshare_Slide>;
  /** fetch data from the table: "slideshare.SlideRecord" */
  slideshare_SlideRecord: Array<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" */
  slideshare_SlideRecordPiece: Array<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" using primary key columns */
  slideshare_SlideRecordPiece_by_pk?: Maybe<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecord" using primary key columns */
  slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.Slide" using primary key columns */
  slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
};


export type Query_RootBoardArgs = {
  distinct_on?: Maybe<Array<Board_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Board_Order_By>>;
  where?: Maybe<Board_Bool_Exp>;
};


export type Query_RootBoard_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Query_RootNoteArgs = {
  distinct_on?: Maybe<Array<Note_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_Order_By>>;
  where?: Maybe<Note_Bool_Exp>;
};


export type Query_RootNote_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Query_RootSlideshare_BookmarkArgs = {
  distinct_on?: Maybe<Array<Slideshare_Bookmark_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Bookmark_Order_By>>;
  where?: Maybe<Slideshare_Bookmark_Bool_Exp>;
};


export type Query_RootSlideshare_Bookmark_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_CommentArgs = {
  distinct_on?: Maybe<Array<Slideshare_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Comment_Order_By>>;
  where?: Maybe<Slideshare_Comment_Bool_Exp>;
};


export type Query_RootSlideshare_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_ConferenceArgs = {
  distinct_on?: Maybe<Array<Slideshare_Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Conference_Order_By>>;
  where?: Maybe<Slideshare_Conference_Bool_Exp>;
};


export type Query_RootSlideshare_ConferenceSubscriberArgs = {
  distinct_on?: Maybe<Array<Slideshare_ConferenceSubscriber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_ConferenceSubscriber_Order_By>>;
  where?: Maybe<Slideshare_ConferenceSubscriber_Bool_Exp>;
};


export type Query_RootSlideshare_ConferenceSubscriber_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_Conference_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_FileArgs = {
  distinct_on?: Maybe<Array<Slideshare_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_File_Order_By>>;
  where?: Maybe<Slideshare_File_Bool_Exp>;
};


export type Query_RootSlideshare_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_FollowerArgs = {
  distinct_on?: Maybe<Array<Slideshare_Follower_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Follower_Order_By>>;
  where?: Maybe<Slideshare_Follower_Bool_Exp>;
};


export type Query_RootSlideshare_Follower_By_PkArgs = {
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};


export type Query_RootSlideshare_PageArgs = {
  distinct_on?: Maybe<Array<Slideshare_Page_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Page_Order_By>>;
  where?: Maybe<Slideshare_Page_Bool_Exp>;
};


export type Query_RootSlideshare_PageTypeArgs = {
  distinct_on?: Maybe<Array<Slideshare_PageType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_PageType_Order_By>>;
  where?: Maybe<Slideshare_PageType_Bool_Exp>;
};


export type Query_RootSlideshare_PageType_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSlideshare_Page_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSlideshare_PollArgs = {
  distinct_on?: Maybe<Array<Slideshare_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Poll_Order_By>>;
  where?: Maybe<Slideshare_Poll_Bool_Exp>;
};


export type Query_RootSlideshare_PollResultArgs = {
  distinct_on?: Maybe<Array<Slideshare_PollResult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_PollResult_Order_By>>;
  where?: Maybe<Slideshare_PollResult_Bool_Exp>;
};


export type Query_RootSlideshare_PollResult_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_Poll_By_PkArgs = {
  pageId: Scalars['String'];
};


export type Query_RootSlideshare_ProfileArgs = {
  distinct_on?: Maybe<Array<Slideshare_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Profile_Order_By>>;
  where?: Maybe<Slideshare_Profile_Bool_Exp>;
};


export type Query_RootSlideshare_Profile_By_PkArgs = {
  userId: Scalars['String'];
};


export type Query_RootSlideshare_RoomArgs = {
  distinct_on?: Maybe<Array<Slideshare_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Room_Order_By>>;
  where?: Maybe<Slideshare_Room_Bool_Exp>;
};


export type Query_RootSlideshare_RoomParticipantArgs = {
  distinct_on?: Maybe<Array<Slideshare_RoomParticipant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_RoomParticipant_Order_By>>;
  where?: Maybe<Slideshare_RoomParticipant_Bool_Exp>;
};


export type Query_RootSlideshare_RoomParticipant_By_PkArgs = {
  userId: Scalars['String'];
};


export type Query_RootSlideshare_Room_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_SlideArgs = {
  distinct_on?: Maybe<Array<Slideshare_Slide_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Slide_Order_By>>;
  where?: Maybe<Slideshare_Slide_Bool_Exp>;
};


export type Query_RootSlideshare_SlideRecordArgs = {
  distinct_on?: Maybe<Array<Slideshare_SlideRecord_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_SlideRecord_Order_By>>;
  where?: Maybe<Slideshare_SlideRecord_Bool_Exp>;
};


export type Query_RootSlideshare_SlideRecordPieceArgs = {
  distinct_on?: Maybe<Array<Slideshare_SlideRecordPiece_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_SlideRecordPiece_Order_By>>;
  where?: Maybe<Slideshare_SlideRecordPiece_Bool_Exp>;
};


export type Query_RootSlideshare_SlideRecordPiece_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_SlideRecord_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSlideshare_Slide_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "slideshare.Bookmark" */
export type Slideshare_Bookmark = {
  __typename?: 'slideshare_Bookmark';
  id: Scalars['Int'];
  pageId: Scalars['String'];
  url: Scalars['String'];
};

/** order by aggregate values of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Aggregate_Order_By = {
  avg?: Maybe<Slideshare_Bookmark_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slideshare_Bookmark_Max_Order_By>;
  min?: Maybe<Slideshare_Bookmark_Min_Order_By>;
  stddev?: Maybe<Slideshare_Bookmark_Stddev_Order_By>;
  stddev_pop?: Maybe<Slideshare_Bookmark_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slideshare_Bookmark_Stddev_Samp_Order_By>;
  sum?: Maybe<Slideshare_Bookmark_Sum_Order_By>;
  var_pop?: Maybe<Slideshare_Bookmark_Var_Pop_Order_By>;
  var_samp?: Maybe<Slideshare_Bookmark_Var_Samp_Order_By>;
  variance?: Maybe<Slideshare_Bookmark_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_Bookmark_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Bookmark_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Bookmark". All fields are combined with a logical 'AND'. */
export type Slideshare_Bookmark_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_Bookmark_Bool_Exp>>;
  _not?: Maybe<Slideshare_Bookmark_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Bookmark_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  pageId?: Maybe<String_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Bookmark" */
export enum Slideshare_Bookmark_Constraint {
  /** unique or primary key constraint */
  BookmarkPkey = 'Bookmark_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  pageId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Max_Order_By = {
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** order by min() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Min_Order_By = {
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Mutation_Response = {
  __typename?: 'slideshare_Bookmark_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Bookmark>;
};

/** on conflict condition type for table "slideshare.Bookmark" */
export type Slideshare_Bookmark_On_Conflict = {
  constraint: Slideshare_Bookmark_Constraint;
  update_columns?: Array<Slideshare_Bookmark_Update_Column>;
  where?: Maybe<Slideshare_Bookmark_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Bookmark". */
export type Slideshare_Bookmark_Order_By = {
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Bookmark */
export type Slideshare_Bookmark_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Bookmark" */
export enum Slideshare_Bookmark_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  pageId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "slideshare.Bookmark" */
export enum Slideshare_Bookmark_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Url = 'url'
}

/** order by var_pop() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.Bookmark" */
export type Slideshare_Bookmark_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "slideshare.Comment" */
export type Slideshare_Comment = {
  __typename?: 'slideshare_Comment';
  /** An object relationship */
  Page: Slideshare_Page;
  /** An object relationship */
  Profile?: Maybe<Slideshare_Profile>;
  /** An object relationship */
  Slide: Slideshare_Slide;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  pageId: Scalars['String'];
  slideId: Scalars['Int'];
  text: Scalars['String'];
};

/** order by aggregate values of table "slideshare.Comment" */
export type Slideshare_Comment_Aggregate_Order_By = {
  avg?: Maybe<Slideshare_Comment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slideshare_Comment_Max_Order_By>;
  min?: Maybe<Slideshare_Comment_Min_Order_By>;
  stddev?: Maybe<Slideshare_Comment_Stddev_Order_By>;
  stddev_pop?: Maybe<Slideshare_Comment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slideshare_Comment_Stddev_Samp_Order_By>;
  sum?: Maybe<Slideshare_Comment_Sum_Order_By>;
  var_pop?: Maybe<Slideshare_Comment_Var_Pop_Order_By>;
  var_samp?: Maybe<Slideshare_Comment_Var_Samp_Order_By>;
  variance?: Maybe<Slideshare_Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.Comment" */
export type Slideshare_Comment_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_Comment_Insert_Input>;
};

/** order by avg() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Avg_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Comment". All fields are combined with a logical 'AND'. */
export type Slideshare_Comment_Bool_Exp = {
  Page?: Maybe<Slideshare_Page_Bool_Exp>;
  Profile?: Maybe<Slideshare_Profile_Bool_Exp>;
  Slide?: Maybe<Slideshare_Slide_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_Comment_Bool_Exp>>;
  _not?: Maybe<Slideshare_Comment_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Comment_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  pageId?: Maybe<String_Comparison_Exp>;
  slideId?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.Comment" */
export type Slideshare_Comment_Insert_Input = {
  Page?: Maybe<Slideshare_Page_Obj_Rel_Insert_Input>;
  Profile?: Maybe<Slideshare_Profile_Obj_Rel_Insert_Input>;
  Slide?: Maybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  pageId?: Maybe<Scalars['String']>;
  slideId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** order by min() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** response of any mutation on the table "slideshare.Comment" */
export type Slideshare_Comment_Mutation_Response = {
  __typename?: 'slideshare_Comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Comment>;
};

/** Ordering options when selecting data from "slideshare.Comment". */
export type Slideshare_Comment_Order_By = {
  Page?: Maybe<Slideshare_Page_Order_By>;
  Profile?: Maybe<Slideshare_Profile_Order_By>;
  Slide?: Maybe<Slideshare_Slide_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** select columns of table "slideshare.Comment" */
export enum Slideshare_Comment_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  Text = 'text'
}

/** order by stddev() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Sum_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.Comment" */
export type Slideshare_Comment_Variance_Order_By = {
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** columns and relationships of "slideshare.Conference" */
export type Slideshare_Conference = {
  __typename?: 'slideshare_Conference';
  /** An object relationship */
  Slide: Slideshare_Slide;
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  endDate: Scalars['numeric'];
  id: Scalars['Int'];
  slideId: Scalars['Int'];
  startDate: Scalars['numeric'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "slideshare.ConferenceSubscriber" */
export type Slideshare_ConferenceSubscriber = {
  __typename?: 'slideshare_ConferenceSubscriber';
  /** An object relationship */
  Conference: Slideshare_Conference;
  conferenceId: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.ConferenceSubscriber". All fields are combined with a logical 'AND'. */
export type Slideshare_ConferenceSubscriber_Bool_Exp = {
  Conference?: Maybe<Slideshare_Conference_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_ConferenceSubscriber_Bool_Exp>>;
  _not?: Maybe<Slideshare_ConferenceSubscriber_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_ConferenceSubscriber_Bool_Exp>>;
  conferenceId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.ConferenceSubscriber" */
export type Slideshare_ConferenceSubscriber_Insert_Input = {
  Conference?: Maybe<Slideshare_Conference_Obj_Rel_Insert_Input>;
  conferenceId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "slideshare.ConferenceSubscriber" */
export type Slideshare_ConferenceSubscriber_Mutation_Response = {
  __typename?: 'slideshare_ConferenceSubscriber_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_ConferenceSubscriber>;
};

/** Ordering options when selecting data from "slideshare.ConferenceSubscriber". */
export type Slideshare_ConferenceSubscriber_Order_By = {
  Conference?: Maybe<Slideshare_Conference_Order_By>;
  conferenceId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** select columns of table "slideshare.ConferenceSubscriber" */
export enum Slideshare_ConferenceSubscriber_Select_Column {
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** Boolean expression to filter rows from the table "slideshare.Conference". All fields are combined with a logical 'AND'. */
export type Slideshare_Conference_Bool_Exp = {
  Slide?: Maybe<Slideshare_Slide_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_Conference_Bool_Exp>>;
  _not?: Maybe<Slideshare_Conference_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Conference_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  endDate?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  slideId?: Maybe<Int_Comparison_Exp>;
  startDate?: Maybe<Numeric_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Conference" */
export enum Slideshare_Conference_Constraint {
  /** unique or primary key constraint */
  ConferencePkey = 'Conference_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Conference" */
export type Slideshare_Conference_Inc_Input = {
  endDate?: Maybe<Scalars['numeric']>;
  startDate?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "slideshare.Conference" */
export type Slideshare_Conference_Insert_Input = {
  Slide?: Maybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  endDate?: Maybe<Scalars['numeric']>;
  slideId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Conference" */
export type Slideshare_Conference_Mutation_Response = {
  __typename?: 'slideshare_Conference_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Conference>;
};

/** input type for inserting object relation for remote table "slideshare.Conference" */
export type Slideshare_Conference_Obj_Rel_Insert_Input = {
  data: Slideshare_Conference_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Conference_On_Conflict>;
};

/** on conflict condition type for table "slideshare.Conference" */
export type Slideshare_Conference_On_Conflict = {
  constraint: Slideshare_Conference_Constraint;
  update_columns?: Array<Slideshare_Conference_Update_Column>;
  where?: Maybe<Slideshare_Conference_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Conference". */
export type Slideshare_Conference_Order_By = {
  Slide?: Maybe<Slideshare_Slide_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  endDate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  startDate?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Conference */
export type Slideshare_Conference_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Conference" */
export enum Slideshare_Conference_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Id = 'id',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.Conference" */
export type Slideshare_Conference_Set_Input = {
  endDate?: Maybe<Scalars['numeric']>;
  startDate?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "slideshare.Conference" */
export enum Slideshare_Conference_Update_Column {
  /** column name */
  EndDate = 'endDate',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "slideshare.File" */
export type Slideshare_File = {
  __typename?: 'slideshare_File';
  createdBy: Scalars['String'];
  filename: Scalars['String'];
  id: Scalars['Int'];
  pageId: Scalars['String'];
  path: Scalars['String'];
};

/** order by aggregate values of table "slideshare.File" */
export type Slideshare_File_Aggregate_Order_By = {
  avg?: Maybe<Slideshare_File_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slideshare_File_Max_Order_By>;
  min?: Maybe<Slideshare_File_Min_Order_By>;
  stddev?: Maybe<Slideshare_File_Stddev_Order_By>;
  stddev_pop?: Maybe<Slideshare_File_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slideshare_File_Stddev_Samp_Order_By>;
  sum?: Maybe<Slideshare_File_Sum_Order_By>;
  var_pop?: Maybe<Slideshare_File_Var_Pop_Order_By>;
  var_samp?: Maybe<Slideshare_File_Var_Samp_Order_By>;
  variance?: Maybe<Slideshare_File_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.File" */
export type Slideshare_File_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_File_Insert_Input>;
};

/** order by avg() on columns of table "slideshare.File" */
export type Slideshare_File_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.File". All fields are combined with a logical 'AND'. */
export type Slideshare_File_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_File_Bool_Exp>>;
  _not?: Maybe<Slideshare_File_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_File_Bool_Exp>>;
  createdBy?: Maybe<String_Comparison_Exp>;
  filename?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  pageId?: Maybe<String_Comparison_Exp>;
  path?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.File" */
export type Slideshare_File_Insert_Input = {
  filename?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.File" */
export type Slideshare_File_Max_Order_By = {
  createdBy?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
};

/** order by min() on columns of table "slideshare.File" */
export type Slideshare_File_Min_Order_By = {
  createdBy?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
};

/** response of any mutation on the table "slideshare.File" */
export type Slideshare_File_Mutation_Response = {
  __typename?: 'slideshare_File_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_File>;
};

/** Ordering options when selecting data from "slideshare.File". */
export type Slideshare_File_Order_By = {
  createdBy?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
};

/** select columns of table "slideshare.File" */
export enum Slideshare_File_Select_Column {
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Path = 'path'
}

/** order by stddev() on columns of table "slideshare.File" */
export type Slideshare_File_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.File" */
export type Slideshare_File_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.File" */
export type Slideshare_File_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.File" */
export type Slideshare_File_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "slideshare.File" */
export type Slideshare_File_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.File" */
export type Slideshare_File_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.File" */
export type Slideshare_File_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "slideshare.Follower" */
export type Slideshare_Follower = {
  __typename?: 'slideshare_Follower';
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.Follower". All fields are combined with a logical 'AND'. */
export type Slideshare_Follower_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_Follower_Bool_Exp>>;
  _not?: Maybe<Slideshare_Follower_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Follower_Bool_Exp>>;
  follow_user_id?: Maybe<String_Comparison_Exp>;
  follower_user_id?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.Follower" */
export type Slideshare_Follower_Insert_Input = {
  follow_user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Follower" */
export type Slideshare_Follower_Mutation_Response = {
  __typename?: 'slideshare_Follower_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Follower>;
};

/** Ordering options when selecting data from "slideshare.Follower". */
export type Slideshare_Follower_Order_By = {
  follow_user_id?: Maybe<Order_By>;
  follower_user_id?: Maybe<Order_By>;
};

/** select columns of table "slideshare.Follower" */
export enum Slideshare_Follower_Select_Column {
  /** column name */
  FollowUserId = 'follow_user_id',
  /** column name */
  FollowerUserId = 'follower_user_id'
}

/** columns and relationships of "slideshare.Page" */
export type Slideshare_Page = {
  __typename?: 'slideshare_Page';
  /** An array relationship */
  Bookmarks: Array<Slideshare_Bookmark>;
  /** An array relationship */
  Comments: Array<Slideshare_Comment>;
  /** An array relationship */
  Files: Array<Slideshare_File>;
  /** An object relationship */
  PageType: Slideshare_PageType;
  /** An object relationship */
  Poll?: Maybe<Slideshare_Poll>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  pageNumber: Scalars['Int'];
  slideId: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: Slideshare_PageType_Enum;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  videoUrl?: Maybe<Scalars['String']>;
};


/** columns and relationships of "slideshare.Page" */
export type Slideshare_PageBookmarksArgs = {
  distinct_on?: Maybe<Array<Slideshare_Bookmark_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Bookmark_Order_By>>;
  where?: Maybe<Slideshare_Bookmark_Bool_Exp>;
};


/** columns and relationships of "slideshare.Page" */
export type Slideshare_PageCommentsArgs = {
  distinct_on?: Maybe<Array<Slideshare_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Comment_Order_By>>;
  where?: Maybe<Slideshare_Comment_Bool_Exp>;
};


/** columns and relationships of "slideshare.Page" */
export type Slideshare_PageFilesArgs = {
  distinct_on?: Maybe<Array<Slideshare_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_File_Order_By>>;
  where?: Maybe<Slideshare_File_Bool_Exp>;
};

/** columns and relationships of "slideshare.PageType" */
export type Slideshare_PageType = {
  __typename?: 'slideshare_PageType';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.PageType". All fields are combined with a logical 'AND'. */
export type Slideshare_PageType_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_PageType_Bool_Exp>>;
  _not?: Maybe<Slideshare_PageType_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_PageType_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Slideshare_PageType_Enum {
  FreeImage = 'FreeImage',
  GoogleForm = 'GoogleForm',
  Bookmark = 'bookmark',
  Codepen = 'codepen',
  File = 'file',
  Image = 'image',
  Notion = 'notion',
  Poll = 'poll',
  Temp = 'temp',
  Text = 'text',
  Typeform = 'typeform',
  Video = 'video'
}

/** Boolean expression to compare columns of type "slideshare_PageType_enum". All fields are combined with logical 'AND'. */
export type Slideshare_PageType_Enum_Comparison_Exp = {
  _eq?: Maybe<Slideshare_PageType_Enum>;
  _in?: Maybe<Array<Slideshare_PageType_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Slideshare_PageType_Enum>;
  _nin?: Maybe<Array<Slideshare_PageType_Enum>>;
};

/** Ordering options when selecting data from "slideshare.PageType". */
export type Slideshare_PageType_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "slideshare.PageType" */
export enum Slideshare_PageType_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** order by aggregate values of table "slideshare.Page" */
export type Slideshare_Page_Aggregate_Order_By = {
  avg?: Maybe<Slideshare_Page_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slideshare_Page_Max_Order_By>;
  min?: Maybe<Slideshare_Page_Min_Order_By>;
  stddev?: Maybe<Slideshare_Page_Stddev_Order_By>;
  stddev_pop?: Maybe<Slideshare_Page_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slideshare_Page_Stddev_Samp_Order_By>;
  sum?: Maybe<Slideshare_Page_Sum_Order_By>;
  var_pop?: Maybe<Slideshare_Page_Var_Pop_Order_By>;
  var_samp?: Maybe<Slideshare_Page_Var_Samp_Order_By>;
  variance?: Maybe<Slideshare_Page_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.Page" */
export type Slideshare_Page_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_Page_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Page_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.Page" */
export type Slideshare_Page_Avg_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Page". All fields are combined with a logical 'AND'. */
export type Slideshare_Page_Bool_Exp = {
  Bookmarks?: Maybe<Slideshare_Bookmark_Bool_Exp>;
  Comments?: Maybe<Slideshare_Comment_Bool_Exp>;
  Files?: Maybe<Slideshare_File_Bool_Exp>;
  PageType?: Maybe<Slideshare_PageType_Bool_Exp>;
  Poll?: Maybe<Slideshare_Poll_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_Page_Bool_Exp>>;
  _not?: Maybe<Slideshare_Page_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Page_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  imageUrl?: Maybe<String_Comparison_Exp>;
  isVisible?: Maybe<Boolean_Comparison_Exp>;
  pageNumber?: Maybe<Int_Comparison_Exp>;
  slideId?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Slideshare_PageType_Enum_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  videoUrl?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Page" */
export enum Slideshare_Page_Constraint {
  /** unique or primary key constraint */
  PagePkey = 'Page_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Page" */
export type Slideshare_Page_Inc_Input = {
  pageNumber?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.Page" */
export type Slideshare_Page_Insert_Input = {
  Bookmarks?: Maybe<Slideshare_Bookmark_Arr_Rel_Insert_Input>;
  Comments?: Maybe<Slideshare_Comment_Arr_Rel_Insert_Input>;
  Files?: Maybe<Slideshare_File_Arr_Rel_Insert_Input>;
  Poll?: Maybe<Slideshare_Poll_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  pageNumber?: Maybe<Scalars['Int']>;
  slideId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Slideshare_PageType_Enum>;
  videoUrl?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.Page" */
export type Slideshare_Page_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  videoUrl?: Maybe<Order_By>;
};

/** order by min() on columns of table "slideshare.Page" */
export type Slideshare_Page_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  videoUrl?: Maybe<Order_By>;
};

/** response of any mutation on the table "slideshare.Page" */
export type Slideshare_Page_Mutation_Response = {
  __typename?: 'slideshare_Page_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Page>;
};

/** input type for inserting object relation for remote table "slideshare.Page" */
export type Slideshare_Page_Obj_Rel_Insert_Input = {
  data: Slideshare_Page_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Page_On_Conflict>;
};

/** on conflict condition type for table "slideshare.Page" */
export type Slideshare_Page_On_Conflict = {
  constraint: Slideshare_Page_Constraint;
  update_columns?: Array<Slideshare_Page_Update_Column>;
  where?: Maybe<Slideshare_Page_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Page". */
export type Slideshare_Page_Order_By = {
  Bookmarks_aggregate?: Maybe<Slideshare_Bookmark_Aggregate_Order_By>;
  Comments_aggregate?: Maybe<Slideshare_Comment_Aggregate_Order_By>;
  Files_aggregate?: Maybe<Slideshare_File_Aggregate_Order_By>;
  PageType?: Maybe<Slideshare_PageType_Order_By>;
  Poll?: Maybe<Slideshare_Poll_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  isVisible?: Maybe<Order_By>;
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  videoUrl?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Page */
export type Slideshare_Page_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "slideshare.Page" */
export enum Slideshare_Page_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsVisible = 'isVisible',
  /** column name */
  PageNumber = 'pageNumber',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VideoUrl = 'videoUrl'
}

/** input type for updating data in table "slideshare.Page" */
export type Slideshare_Page_Set_Input = {
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  pageNumber?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Slideshare_PageType_Enum>;
  videoUrl?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "slideshare.Page" */
export type Slideshare_Page_Stddev_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.Page" */
export type Slideshare_Page_Stddev_Pop_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.Page" */
export type Slideshare_Page_Stddev_Samp_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.Page" */
export type Slideshare_Page_Sum_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** update columns of table "slideshare.Page" */
export enum Slideshare_Page_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsVisible = 'isVisible',
  /** column name */
  PageNumber = 'pageNumber',
  /** column name */
  Text = 'text',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  VideoUrl = 'videoUrl'
}

/** order by var_pop() on columns of table "slideshare.Page" */
export type Slideshare_Page_Var_Pop_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.Page" */
export type Slideshare_Page_Var_Samp_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.Page" */
export type Slideshare_Page_Variance_Order_By = {
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** columns and relationships of "slideshare.Poll" */
export type Slideshare_Poll = {
  __typename?: 'slideshare_Poll';
  /** An object relationship */
  Page: Slideshare_Page;
  /** An array relationship */
  PollResults: Array<Slideshare_PollResult>;
  option1: Scalars['String'];
  option2: Scalars['String'];
  option3?: Maybe<Scalars['String']>;
  option4?: Maybe<Scalars['String']>;
  pageId: Scalars['String'];
  question: Scalars['String'];
};


/** columns and relationships of "slideshare.Poll" */
export type Slideshare_PollPollResultsArgs = {
  distinct_on?: Maybe<Array<Slideshare_PollResult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_PollResult_Order_By>>;
  where?: Maybe<Slideshare_PollResult_Bool_Exp>;
};

/** columns and relationships of "slideshare.PollResult" */
export type Slideshare_PollResult = {
  __typename?: 'slideshare_PollResult';
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  optionNumber: Scalars['Int'];
  pageId: Scalars['String'];
};

/** order by aggregate values of table "slideshare.PollResult" */
export type Slideshare_PollResult_Aggregate_Order_By = {
  avg?: Maybe<Slideshare_PollResult_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slideshare_PollResult_Max_Order_By>;
  min?: Maybe<Slideshare_PollResult_Min_Order_By>;
  stddev?: Maybe<Slideshare_PollResult_Stddev_Order_By>;
  stddev_pop?: Maybe<Slideshare_PollResult_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slideshare_PollResult_Stddev_Samp_Order_By>;
  sum?: Maybe<Slideshare_PollResult_Sum_Order_By>;
  var_pop?: Maybe<Slideshare_PollResult_Var_Pop_Order_By>;
  var_samp?: Maybe<Slideshare_PollResult_Var_Samp_Order_By>;
  variance?: Maybe<Slideshare_PollResult_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.PollResult" */
export type Slideshare_PollResult_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_PollResult_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_PollResult_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Avg_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.PollResult". All fields are combined with a logical 'AND'. */
export type Slideshare_PollResult_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_PollResult_Bool_Exp>>;
  _not?: Maybe<Slideshare_PollResult_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_PollResult_Bool_Exp>>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  optionNumber?: Maybe<Int_Comparison_Exp>;
  pageId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.PollResult" */
export enum Slideshare_PollResult_Constraint {
  /** unique or primary key constraint */
  PollResultPageIdCreatedByKey = 'PollResult_pageId_createdBy_key',
  /** unique or primary key constraint */
  PollResultPkey = 'PollResult_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.PollResult" */
export type Slideshare_PollResult_Inc_Input = {
  optionNumber?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.PollResult" */
export type Slideshare_PollResult_Insert_Input = {
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  optionNumber?: Maybe<Scalars['Int']>;
  pageId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Max_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
};

/** order by min() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Min_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
};

/** response of any mutation on the table "slideshare.PollResult" */
export type Slideshare_PollResult_Mutation_Response = {
  __typename?: 'slideshare_PollResult_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_PollResult>;
};

/** on conflict condition type for table "slideshare.PollResult" */
export type Slideshare_PollResult_On_Conflict = {
  constraint: Slideshare_PollResult_Constraint;
  update_columns?: Array<Slideshare_PollResult_Update_Column>;
  where?: Maybe<Slideshare_PollResult_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.PollResult". */
export type Slideshare_PollResult_Order_By = {
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_PollResult */
export type Slideshare_PollResult_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.PollResult" */
export enum Slideshare_PollResult_Select_Column {
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  OptionNumber = 'optionNumber',
  /** column name */
  PageId = 'pageId'
}

/** input type for updating data in table "slideshare.PollResult" */
export type Slideshare_PollResult_Set_Input = {
  optionNumber?: Maybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Sum_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** update columns of table "slideshare.PollResult" */
export enum Slideshare_PollResult_Update_Column {
  /** column name */
  OptionNumber = 'optionNumber'
}

/** order by var_pop() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.PollResult" */
export type Slideshare_PollResult_Variance_Order_By = {
  id?: Maybe<Order_By>;
  optionNumber?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Poll". All fields are combined with a logical 'AND'. */
export type Slideshare_Poll_Bool_Exp = {
  Page?: Maybe<Slideshare_Page_Bool_Exp>;
  PollResults?: Maybe<Slideshare_PollResult_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_Poll_Bool_Exp>>;
  _not?: Maybe<Slideshare_Poll_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Poll_Bool_Exp>>;
  option1?: Maybe<String_Comparison_Exp>;
  option2?: Maybe<String_Comparison_Exp>;
  option3?: Maybe<String_Comparison_Exp>;
  option4?: Maybe<String_Comparison_Exp>;
  pageId?: Maybe<String_Comparison_Exp>;
  question?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Poll" */
export enum Slideshare_Poll_Constraint {
  /** unique or primary key constraint */
  PollPkey = 'Poll_pkey'
}

/** input type for inserting data into table "slideshare.Poll" */
export type Slideshare_Poll_Insert_Input = {
  Page?: Maybe<Slideshare_Page_Obj_Rel_Insert_Input>;
  PollResults?: Maybe<Slideshare_PollResult_Arr_Rel_Insert_Input>;
  option1?: Maybe<Scalars['String']>;
  option2?: Maybe<Scalars['String']>;
  option3?: Maybe<Scalars['String']>;
  option4?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Poll" */
export type Slideshare_Poll_Mutation_Response = {
  __typename?: 'slideshare_Poll_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Poll>;
};

/** input type for inserting object relation for remote table "slideshare.Poll" */
export type Slideshare_Poll_Obj_Rel_Insert_Input = {
  data: Slideshare_Poll_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Poll_On_Conflict>;
};

/** on conflict condition type for table "slideshare.Poll" */
export type Slideshare_Poll_On_Conflict = {
  constraint: Slideshare_Poll_Constraint;
  update_columns?: Array<Slideshare_Poll_Update_Column>;
  where?: Maybe<Slideshare_Poll_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Poll". */
export type Slideshare_Poll_Order_By = {
  Page?: Maybe<Slideshare_Page_Order_By>;
  PollResults_aggregate?: Maybe<Slideshare_PollResult_Aggregate_Order_By>;
  option1?: Maybe<Order_By>;
  option2?: Maybe<Order_By>;
  option3?: Maybe<Order_By>;
  option4?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Poll */
export type Slideshare_Poll_Pk_Columns_Input = {
  pageId: Scalars['String'];
};

/** select columns of table "slideshare.Poll" */
export enum Slideshare_Poll_Select_Column {
  /** column name */
  Option1 = 'option1',
  /** column name */
  Option2 = 'option2',
  /** column name */
  Option3 = 'option3',
  /** column name */
  Option4 = 'option4',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Question = 'question'
}

/** input type for updating data in table "slideshare.Poll" */
export type Slideshare_Poll_Set_Input = {
  option1?: Maybe<Scalars['String']>;
  option2?: Maybe<Scalars['String']>;
  option3?: Maybe<Scalars['String']>;
  option4?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
};

/** update columns of table "slideshare.Poll" */
export enum Slideshare_Poll_Update_Column {
  /** column name */
  Option1 = 'option1',
  /** column name */
  Option2 = 'option2',
  /** column name */
  Option3 = 'option3',
  /** column name */
  Option4 = 'option4',
  /** column name */
  PageId = 'pageId',
  /** column name */
  Question = 'question'
}

/** columns and relationships of "slideshare.Profile" */
export type Slideshare_Profile = {
  __typename?: 'slideshare_Profile';
  contribution: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.Profile". All fields are combined with a logical 'AND'. */
export type Slideshare_Profile_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_Profile_Bool_Exp>>;
  _not?: Maybe<Slideshare_Profile_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Profile_Bool_Exp>>;
  contribution?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  profile?: Maybe<String_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Profile" */
export enum Slideshare_Profile_Constraint {
  /** unique or primary key constraint */
  ProfilePkey = 'Profile_pkey'
}

/** input type for inserting data into table "slideshare.Profile" */
export type Slideshare_Profile_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Profile" */
export type Slideshare_Profile_Mutation_Response = {
  __typename?: 'slideshare_Profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Profile>;
};

/** input type for inserting object relation for remote table "slideshare.Profile" */
export type Slideshare_Profile_Obj_Rel_Insert_Input = {
  data: Slideshare_Profile_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Profile_On_Conflict>;
};

/** on conflict condition type for table "slideshare.Profile" */
export type Slideshare_Profile_On_Conflict = {
  constraint: Slideshare_Profile_Constraint;
  update_columns?: Array<Slideshare_Profile_Update_Column>;
  where?: Maybe<Slideshare_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Profile". */
export type Slideshare_Profile_Order_By = {
  contribution?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  profile?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Profile */
export type Slideshare_Profile_Pk_Columns_Input = {
  userId: Scalars['String'];
};

/** select columns of table "slideshare.Profile" */
export enum Slideshare_Profile_Select_Column {
  /** column name */
  Contribution = 'contribution',
  /** column name */
  Name = 'name',
  /** column name */
  Profile = 'profile',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "slideshare.Profile" */
export type Slideshare_Profile_Set_Input = {
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

/** update columns of table "slideshare.Profile" */
export enum Slideshare_Profile_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Profile = 'profile'
}

/** columns and relationships of "slideshare.Room" */
export type Slideshare_Room = {
  __typename?: 'slideshare_Room';
  /** An array relationship */
  RoomParticipants: Array<Slideshare_RoomParticipant>;
  /** An object relationship */
  Slide?: Maybe<Slideshare_Slide>;
  createdAt: Scalars['timestamptz'];
  createdBy: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  presentingSlide?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "slideshare.Room" */
export type Slideshare_RoomRoomParticipantsArgs = {
  distinct_on?: Maybe<Array<Slideshare_RoomParticipant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_RoomParticipant_Order_By>>;
  where?: Maybe<Slideshare_RoomParticipant_Bool_Exp>;
};

/** columns and relationships of "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant = {
  __typename?: 'slideshare_RoomParticipant';
  /** An object relationship */
  Profile: Slideshare_Profile;
  /** An object relationship */
  Room?: Maybe<Slideshare_Room>;
  /** An object relationship */
  Slide?: Maybe<Slideshare_Slide>;
  createdAt: Scalars['timestamptz'];
  roomId?: Maybe<Scalars['Int']>;
  slideId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['String'];
};

/** order by aggregate values of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Aggregate_Order_By = {
  avg?: Maybe<Slideshare_RoomParticipant_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slideshare_RoomParticipant_Max_Order_By>;
  min?: Maybe<Slideshare_RoomParticipant_Min_Order_By>;
  stddev?: Maybe<Slideshare_RoomParticipant_Stddev_Order_By>;
  stddev_pop?: Maybe<Slideshare_RoomParticipant_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slideshare_RoomParticipant_Stddev_Samp_Order_By>;
  sum?: Maybe<Slideshare_RoomParticipant_Sum_Order_By>;
  var_pop?: Maybe<Slideshare_RoomParticipant_Var_Pop_Order_By>;
  var_samp?: Maybe<Slideshare_RoomParticipant_Var_Samp_Order_By>;
  variance?: Maybe<Slideshare_RoomParticipant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_RoomParticipant_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_RoomParticipant_On_Conflict>;
};

/** order by avg() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Avg_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.RoomParticipant". All fields are combined with a logical 'AND'. */
export type Slideshare_RoomParticipant_Bool_Exp = {
  Profile?: Maybe<Slideshare_Profile_Bool_Exp>;
  Room?: Maybe<Slideshare_Room_Bool_Exp>;
  Slide?: Maybe<Slideshare_Slide_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_RoomParticipant_Bool_Exp>>;
  _not?: Maybe<Slideshare_RoomParticipant_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_RoomParticipant_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  roomId?: Maybe<Int_Comparison_Exp>;
  slideId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.RoomParticipant" */
export enum Slideshare_RoomParticipant_Constraint {
  /** unique or primary key constraint */
  RoomParticipantPkey = 'RoomParticipant_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Inc_Input = {
  roomId?: Maybe<Scalars['Int']>;
  slideId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Insert_Input = {
  Profile?: Maybe<Slideshare_Profile_Obj_Rel_Insert_Input>;
  Room?: Maybe<Slideshare_Room_Obj_Rel_Insert_Input>;
  Slide?: Maybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  roomId?: Maybe<Scalars['Int']>;
  slideId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** order by min() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Mutation_Response = {
  __typename?: 'slideshare_RoomParticipant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_RoomParticipant>;
};

/** on conflict condition type for table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_On_Conflict = {
  constraint: Slideshare_RoomParticipant_Constraint;
  update_columns?: Array<Slideshare_RoomParticipant_Update_Column>;
  where?: Maybe<Slideshare_RoomParticipant_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.RoomParticipant". */
export type Slideshare_RoomParticipant_Order_By = {
  Profile?: Maybe<Slideshare_Profile_Order_By>;
  Room?: Maybe<Slideshare_Room_Order_By>;
  Slide?: Maybe<Slideshare_Slide_Order_By>;
  createdAt?: Maybe<Order_By>;
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_RoomParticipant */
export type Slideshare_RoomParticipant_Pk_Columns_Input = {
  userId: Scalars['String'];
};

/** select columns of table "slideshare.RoomParticipant" */
export enum Slideshare_RoomParticipant_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  RoomId = 'roomId',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Set_Input = {
  roomId?: Maybe<Scalars['Int']>;
  slideId?: Maybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Stddev_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Stddev_Pop_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Stddev_Samp_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Sum_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** update columns of table "slideshare.RoomParticipant" */
export enum Slideshare_RoomParticipant_Update_Column {
  /** column name */
  RoomId = 'roomId',
  /** column name */
  SlideId = 'slideId'
}

/** order by var_pop() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Var_Pop_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Var_Samp_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.RoomParticipant" */
export type Slideshare_RoomParticipant_Variance_Order_By = {
  roomId?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.Room". All fields are combined with a logical 'AND'. */
export type Slideshare_Room_Bool_Exp = {
  RoomParticipants?: Maybe<Slideshare_RoomParticipant_Bool_Exp>;
  Slide?: Maybe<Slideshare_Slide_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_Room_Bool_Exp>>;
  _not?: Maybe<Slideshare_Room_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Room_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  presentingSlide?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Room" */
export enum Slideshare_Room_Constraint {
  /** unique or primary key constraint */
  RoomPkey = 'Room_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Room" */
export type Slideshare_Room_Inc_Input = {
  presentingSlide?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.Room" */
export type Slideshare_Room_Insert_Input = {
  RoomParticipants?: Maybe<Slideshare_RoomParticipant_Arr_Rel_Insert_Input>;
  Slide?: Maybe<Slideshare_Slide_Obj_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  presentingSlide?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "slideshare.Room" */
export type Slideshare_Room_Mutation_Response = {
  __typename?: 'slideshare_Room_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Room>;
};

/** input type for inserting object relation for remote table "slideshare.Room" */
export type Slideshare_Room_Obj_Rel_Insert_Input = {
  data: Slideshare_Room_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Room_On_Conflict>;
};

/** on conflict condition type for table "slideshare.Room" */
export type Slideshare_Room_On_Conflict = {
  constraint: Slideshare_Room_Constraint;
  update_columns?: Array<Slideshare_Room_Update_Column>;
  where?: Maybe<Slideshare_Room_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Room". */
export type Slideshare_Room_Order_By = {
  RoomParticipants_aggregate?: Maybe<Slideshare_RoomParticipant_Aggregate_Order_By>;
  Slide?: Maybe<Slideshare_Slide_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  presentingSlide?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Room */
export type Slideshare_Room_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Room" */
export enum Slideshare_Room_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresentingSlide = 'presentingSlide',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.Room" */
export type Slideshare_Room_Set_Input = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  presentingSlide?: Maybe<Scalars['Int']>;
};

/** update columns of table "slideshare.Room" */
export enum Slideshare_Room_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  PresentingSlide = 'presentingSlide'
}

/** columns and relationships of "slideshare.Slide" */
export type Slideshare_Slide = {
  __typename?: 'slideshare_Slide';
  /** An array relationship */
  Pages: Array<Slideshare_Page>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['Int'];
  status: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "slideshare.Slide" */
export type Slideshare_SlidePagesArgs = {
  distinct_on?: Maybe<Array<Slideshare_Page_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Page_Order_By>>;
  where?: Maybe<Slideshare_Page_Bool_Exp>;
};

/** columns and relationships of "slideshare.SlideRecord" */
export type Slideshare_SlideRecord = {
  __typename?: 'slideshare_SlideRecord';
  /** An array relationship */
  SlideRecordPieces: Array<Slideshare_SlideRecordPiece>;
  audioUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  duration: Scalars['Int'];
  id: Scalars['Int'];
  slideId: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "slideshare.SlideRecord" */
export type Slideshare_SlideRecordSlideRecordPiecesArgs = {
  distinct_on?: Maybe<Array<Slideshare_SlideRecordPiece_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_SlideRecordPiece_Order_By>>;
  where?: Maybe<Slideshare_SlideRecordPiece_Bool_Exp>;
};

/** columns and relationships of "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece = {
  __typename?: 'slideshare_SlideRecordPiece';
  id: Scalars['Int'];
  pageId: Scalars['String'];
  slideRecordId: Scalars['Int'];
  startTime: Scalars['Int'];
};

/** order by aggregate values of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Aggregate_Order_By = {
  avg?: Maybe<Slideshare_SlideRecordPiece_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Slideshare_SlideRecordPiece_Max_Order_By>;
  min?: Maybe<Slideshare_SlideRecordPiece_Min_Order_By>;
  stddev?: Maybe<Slideshare_SlideRecordPiece_Stddev_Order_By>;
  stddev_pop?: Maybe<Slideshare_SlideRecordPiece_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Slideshare_SlideRecordPiece_Stddev_Samp_Order_By>;
  sum?: Maybe<Slideshare_SlideRecordPiece_Sum_Order_By>;
  var_pop?: Maybe<Slideshare_SlideRecordPiece_Var_Pop_Order_By>;
  var_samp?: Maybe<Slideshare_SlideRecordPiece_Var_Samp_Order_By>;
  variance?: Maybe<Slideshare_SlideRecordPiece_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Arr_Rel_Insert_Input = {
  data: Array<Slideshare_SlideRecordPiece_Insert_Input>;
};

/** order by avg() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Avg_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.SlideRecordPiece". All fields are combined with a logical 'AND'. */
export type Slideshare_SlideRecordPiece_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_SlideRecordPiece_Bool_Exp>>;
  _not?: Maybe<Slideshare_SlideRecordPiece_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_SlideRecordPiece_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  pageId?: Maybe<String_Comparison_Exp>;
  slideRecordId?: Maybe<Int_Comparison_Exp>;
  startTime?: Maybe<Int_Comparison_Exp>;
};

/** input type for inserting data into table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Insert_Input = {
  pageId?: Maybe<Scalars['String']>;
  slideRecordId?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Max_Order_By = {
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** order by min() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Min_Order_By = {
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** response of any mutation on the table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Mutation_Response = {
  __typename?: 'slideshare_SlideRecordPiece_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_SlideRecordPiece>;
};

/** Ordering options when selecting data from "slideshare.SlideRecordPiece". */
export type Slideshare_SlideRecordPiece_Order_By = {
  id?: Maybe<Order_By>;
  pageId?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** select columns of table "slideshare.SlideRecordPiece" */
export enum Slideshare_SlideRecordPiece_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PageId = 'pageId',
  /** column name */
  SlideRecordId = 'slideRecordId',
  /** column name */
  StartTime = 'startTime'
}

/** order by stddev() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** order by sum() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Sum_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** order by variance() on columns of table "slideshare.SlideRecordPiece" */
export type Slideshare_SlideRecordPiece_Variance_Order_By = {
  id?: Maybe<Order_By>;
  slideRecordId?: Maybe<Order_By>;
  startTime?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "slideshare.SlideRecord". All fields are combined with a logical 'AND'. */
export type Slideshare_SlideRecord_Bool_Exp = {
  SlideRecordPieces?: Maybe<Slideshare_SlideRecordPiece_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_SlideRecord_Bool_Exp>>;
  _not?: Maybe<Slideshare_SlideRecord_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_SlideRecord_Bool_Exp>>;
  audioUrl?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  duration?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  slideId?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.SlideRecord" */
export enum Slideshare_SlideRecord_Constraint {
  /** unique or primary key constraint */
  SlideRecordAudioUrlKey = 'SlideRecord_audioUrl_key',
  /** unique or primary key constraint */
  SlideRecordPkey = 'SlideRecord_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Inc_Input = {
  duration?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Insert_Input = {
  SlideRecordPieces?: Maybe<Slideshare_SlideRecordPiece_Arr_Rel_Insert_Input>;
  audioUrl?: Maybe<Scalars['String']>;
  slideId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Mutation_Response = {
  __typename?: 'slideshare_SlideRecord_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_SlideRecord>;
};

/** on conflict condition type for table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_On_Conflict = {
  constraint: Slideshare_SlideRecord_Constraint;
  update_columns?: Array<Slideshare_SlideRecord_Update_Column>;
  where?: Maybe<Slideshare_SlideRecord_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.SlideRecord". */
export type Slideshare_SlideRecord_Order_By = {
  SlideRecordPieces_aggregate?: Maybe<Slideshare_SlideRecordPiece_Aggregate_Order_By>;
  audioUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_SlideRecord */
export type Slideshare_SlideRecord_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.SlideRecord" */
export enum Slideshare_SlideRecord_Select_Column {
  /** column name */
  AudioUrl = 'audioUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  SlideId = 'slideId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.SlideRecord" */
export type Slideshare_SlideRecord_Set_Input = {
  audioUrl?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "slideshare.SlideRecord" */
export enum Slideshare_SlideRecord_Update_Column {
  /** column name */
  AudioUrl = 'audioUrl',
  /** column name */
  Duration = 'duration',
  /** column name */
  Title = 'title'
}

/** Boolean expression to filter rows from the table "slideshare.Slide". All fields are combined with a logical 'AND'. */
export type Slideshare_Slide_Bool_Exp = {
  Pages?: Maybe<Slideshare_Page_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_Slide_Bool_Exp>>;
  _not?: Maybe<Slideshare_Slide_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Slide_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Slide" */
export enum Slideshare_Slide_Constraint {
  /** unique or primary key constraint */
  SlidePkey = 'Slide_pkey'
}

/** input type for inserting data into table "slideshare.Slide" */
export type Slideshare_Slide_Insert_Input = {
  Pages?: Maybe<Slideshare_Page_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Slide" */
export type Slideshare_Slide_Mutation_Response = {
  __typename?: 'slideshare_Slide_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Slide>;
};

/** input type for inserting object relation for remote table "slideshare.Slide" */
export type Slideshare_Slide_Obj_Rel_Insert_Input = {
  data: Slideshare_Slide_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Slideshare_Slide_On_Conflict>;
};

/** on conflict condition type for table "slideshare.Slide" */
export type Slideshare_Slide_On_Conflict = {
  constraint: Slideshare_Slide_Constraint;
  update_columns?: Array<Slideshare_Slide_Update_Column>;
  where?: Maybe<Slideshare_Slide_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Slide". */
export type Slideshare_Slide_Order_By = {
  Pages_aggregate?: Maybe<Slideshare_Page_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Slide */
export type Slideshare_Slide_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Slide" */
export enum Slideshare_Slide_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "slideshare.Slide" */
export type Slideshare_Slide_Set_Input = {
  status?: Maybe<Scalars['String']>;
};

/** update columns of table "slideshare.Slide" */
export enum Slideshare_Slide_Update_Column {
  /** column name */
  Status = 'status'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Board" */
  Board: Array<Board>;
  /** fetch data from the table: "Board" using primary key columns */
  Board_by_pk?: Maybe<Board>;
  /** fetch data from the table: "Note" */
  Note: Array<Note>;
  /** fetch data from the table: "Note" using primary key columns */
  Note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "slideshare.Bookmark" */
  slideshare_Bookmark: Array<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Bookmark" using primary key columns */
  slideshare_Bookmark_by_pk?: Maybe<Slideshare_Bookmark>;
  /** fetch data from the table: "slideshare.Comment" */
  slideshare_Comment: Array<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Comment" using primary key columns */
  slideshare_Comment_by_pk?: Maybe<Slideshare_Comment>;
  /** fetch data from the table: "slideshare.Conference" */
  slideshare_Conference: Array<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" */
  slideshare_ConferenceSubscriber: Array<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.ConferenceSubscriber" using primary key columns */
  slideshare_ConferenceSubscriber_by_pk?: Maybe<Slideshare_ConferenceSubscriber>;
  /** fetch data from the table: "slideshare.Conference" using primary key columns */
  slideshare_Conference_by_pk?: Maybe<Slideshare_Conference>;
  /** fetch data from the table: "slideshare.File" */
  slideshare_File: Array<Slideshare_File>;
  /** fetch data from the table: "slideshare.File" using primary key columns */
  slideshare_File_by_pk?: Maybe<Slideshare_File>;
  /** fetch data from the table: "slideshare.Follower" */
  slideshare_Follower: Array<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Follower" using primary key columns */
  slideshare_Follower_by_pk?: Maybe<Slideshare_Follower>;
  /** fetch data from the table: "slideshare.Page" */
  slideshare_Page: Array<Slideshare_Page>;
  /** fetch data from the table: "slideshare.PageType" */
  slideshare_PageType: Array<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.PageType" using primary key columns */
  slideshare_PageType_by_pk?: Maybe<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.Page" using primary key columns */
  slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** fetch data from the table: "slideshare.Poll" */
  slideshare_Poll: Array<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.PollResult" */
  slideshare_PollResult: Array<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.PollResult" using primary key columns */
  slideshare_PollResult_by_pk?: Maybe<Slideshare_PollResult>;
  /** fetch data from the table: "slideshare.Poll" using primary key columns */
  slideshare_Poll_by_pk?: Maybe<Slideshare_Poll>;
  /** fetch data from the table: "slideshare.Profile" */
  slideshare_Profile: Array<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Profile" using primary key columns */
  slideshare_Profile_by_pk?: Maybe<Slideshare_Profile>;
  /** fetch data from the table: "slideshare.Room" */
  slideshare_Room: Array<Slideshare_Room>;
  /** fetch data from the table: "slideshare.RoomParticipant" */
  slideshare_RoomParticipant: Array<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.RoomParticipant" using primary key columns */
  slideshare_RoomParticipant_by_pk?: Maybe<Slideshare_RoomParticipant>;
  /** fetch data from the table: "slideshare.Room" using primary key columns */
  slideshare_Room_by_pk?: Maybe<Slideshare_Room>;
  /** fetch data from the table: "slideshare.Slide" */
  slideshare_Slide: Array<Slideshare_Slide>;
  /** fetch data from the table: "slideshare.SlideRecord" */
  slideshare_SlideRecord: Array<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" */
  slideshare_SlideRecordPiece: Array<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecordPiece" using primary key columns */
  slideshare_SlideRecordPiece_by_pk?: Maybe<Slideshare_SlideRecordPiece>;
  /** fetch data from the table: "slideshare.SlideRecord" using primary key columns */
  slideshare_SlideRecord_by_pk?: Maybe<Slideshare_SlideRecord>;
  /** fetch data from the table: "slideshare.Slide" using primary key columns */
  slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
};


export type Subscription_RootBoardArgs = {
  distinct_on?: Maybe<Array<Board_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Board_Order_By>>;
  where?: Maybe<Board_Bool_Exp>;
};


export type Subscription_RootBoard_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Subscription_RootNoteArgs = {
  distinct_on?: Maybe<Array<Note_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_Order_By>>;
  where?: Maybe<Note_Bool_Exp>;
};


export type Subscription_RootNote_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Subscription_RootSlideshare_BookmarkArgs = {
  distinct_on?: Maybe<Array<Slideshare_Bookmark_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Bookmark_Order_By>>;
  where?: Maybe<Slideshare_Bookmark_Bool_Exp>;
};


export type Subscription_RootSlideshare_Bookmark_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_CommentArgs = {
  distinct_on?: Maybe<Array<Slideshare_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Comment_Order_By>>;
  where?: Maybe<Slideshare_Comment_Bool_Exp>;
};


export type Subscription_RootSlideshare_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_ConferenceArgs = {
  distinct_on?: Maybe<Array<Slideshare_Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Conference_Order_By>>;
  where?: Maybe<Slideshare_Conference_Bool_Exp>;
};


export type Subscription_RootSlideshare_ConferenceSubscriberArgs = {
  distinct_on?: Maybe<Array<Slideshare_ConferenceSubscriber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_ConferenceSubscriber_Order_By>>;
  where?: Maybe<Slideshare_ConferenceSubscriber_Bool_Exp>;
};


export type Subscription_RootSlideshare_ConferenceSubscriber_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_Conference_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_FileArgs = {
  distinct_on?: Maybe<Array<Slideshare_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_File_Order_By>>;
  where?: Maybe<Slideshare_File_Bool_Exp>;
};


export type Subscription_RootSlideshare_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_FollowerArgs = {
  distinct_on?: Maybe<Array<Slideshare_Follower_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Follower_Order_By>>;
  where?: Maybe<Slideshare_Follower_Bool_Exp>;
};


export type Subscription_RootSlideshare_Follower_By_PkArgs = {
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
};


export type Subscription_RootSlideshare_PageArgs = {
  distinct_on?: Maybe<Array<Slideshare_Page_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Page_Order_By>>;
  where?: Maybe<Slideshare_Page_Bool_Exp>;
};


export type Subscription_RootSlideshare_PageTypeArgs = {
  distinct_on?: Maybe<Array<Slideshare_PageType_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_PageType_Order_By>>;
  where?: Maybe<Slideshare_PageType_Bool_Exp>;
};


export type Subscription_RootSlideshare_PageType_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSlideshare_Page_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSlideshare_PollArgs = {
  distinct_on?: Maybe<Array<Slideshare_Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Poll_Order_By>>;
  where?: Maybe<Slideshare_Poll_Bool_Exp>;
};


export type Subscription_RootSlideshare_PollResultArgs = {
  distinct_on?: Maybe<Array<Slideshare_PollResult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_PollResult_Order_By>>;
  where?: Maybe<Slideshare_PollResult_Bool_Exp>;
};


export type Subscription_RootSlideshare_PollResult_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_Poll_By_PkArgs = {
  pageId: Scalars['String'];
};


export type Subscription_RootSlideshare_ProfileArgs = {
  distinct_on?: Maybe<Array<Slideshare_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Profile_Order_By>>;
  where?: Maybe<Slideshare_Profile_Bool_Exp>;
};


export type Subscription_RootSlideshare_Profile_By_PkArgs = {
  userId: Scalars['String'];
};


export type Subscription_RootSlideshare_RoomArgs = {
  distinct_on?: Maybe<Array<Slideshare_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Room_Order_By>>;
  where?: Maybe<Slideshare_Room_Bool_Exp>;
};


export type Subscription_RootSlideshare_RoomParticipantArgs = {
  distinct_on?: Maybe<Array<Slideshare_RoomParticipant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_RoomParticipant_Order_By>>;
  where?: Maybe<Slideshare_RoomParticipant_Bool_Exp>;
};


export type Subscription_RootSlideshare_RoomParticipant_By_PkArgs = {
  userId: Scalars['String'];
};


export type Subscription_RootSlideshare_Room_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_SlideArgs = {
  distinct_on?: Maybe<Array<Slideshare_Slide_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Slide_Order_By>>;
  where?: Maybe<Slideshare_Slide_Bool_Exp>;
};


export type Subscription_RootSlideshare_SlideRecordArgs = {
  distinct_on?: Maybe<Array<Slideshare_SlideRecord_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_SlideRecord_Order_By>>;
  where?: Maybe<Slideshare_SlideRecord_Bool_Exp>;
};


export type Subscription_RootSlideshare_SlideRecordPieceArgs = {
  distinct_on?: Maybe<Array<Slideshare_SlideRecordPiece_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_SlideRecordPiece_Order_By>>;
  where?: Maybe<Slideshare_SlideRecordPiece_Bool_Exp>;
};


export type Subscription_RootSlideshare_SlideRecordPiece_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_SlideRecord_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSlideshare_Slide_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type UpdatePageMutationVariables = Exact<{
  id: Scalars['String'];
  object?: Maybe<Slideshare_Page_Set_Input>;
}>;


export type UpdatePageMutation = { __typename?: 'mutation_root', update_slideshare_Page_by_pk?: { __typename?: 'slideshare_Page', id: string } | null | undefined };

export type UpdatePageNumberMutationVariables = Exact<{
  objects: Array<Slideshare_Page_Insert_Input> | Slideshare_Page_Insert_Input;
}>;


export type UpdatePageNumberMutation = { __typename?: 'mutation_root', insert_slideshare_Page?: { __typename?: 'slideshare_Page_mutation_response', affected_rows: number } | null | undefined };

export type UpdatePagesMutationVariables = Exact<{
  id: Scalars['String'];
  object?: Maybe<Slideshare_Page_Set_Input>;
}>;


export type UpdatePagesMutation = { __typename?: 'mutation_root', update_slideshare_Page_by_pk?: { __typename?: 'slideshare_Page', id: string } | null | undefined };

export type InsertPageMutationVariables = Exact<{
  object?: Maybe<Slideshare_Page_Insert_Input>;
}>;


export type InsertPageMutation = { __typename?: 'mutation_root', insert_slideshare_Page_one?: { __typename?: 'slideshare_Page', id: string, pageNumber: number, imageUrl?: string | null | undefined, isVisible: boolean, slideId: number, text?: string | null | undefined, type: Slideshare_PageType_Enum, videoUrl?: string | null | undefined } | null | undefined };

export type DeletePageMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePageMutation = { __typename?: 'mutation_root', delete_slideshare_Page_by_pk?: { __typename?: 'slideshare_Page', id: string } | null | undefined };

export type InsertBookmarkMutationVariables = Exact<{
  pageId: Scalars['String'];
  url: Scalars['String'];
}>;


export type InsertBookmarkMutation = { __typename?: 'mutation_root', insert_slideshare_Bookmark_one?: { __typename?: 'slideshare_Bookmark', id: number } | null | undefined };

export type DeleteBookmarkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteBookmarkMutation = { __typename?: 'mutation_root', delete_slideshare_Bookmark_by_pk?: { __typename?: 'slideshare_Bookmark', id: number } | null | undefined };

export type QueryCommentSubscriptionVariables = Exact<{
  slideId?: Maybe<Scalars['Int']>;
}>;


export type QueryCommentSubscription = { __typename?: 'subscription_root', slideshare_Comment: Array<{ __typename?: 'slideshare_Comment', id: number, slideId: number, pageId: string, text: string, createdBy: string, createdAt?: any | null | undefined, Page: { __typename?: 'slideshare_Page', pageNumber: number }, Profile?: { __typename?: 'slideshare_Profile', profile?: string | null | undefined, name?: string | null | undefined } | null | undefined }> };

export type SendCommentMutationVariables = Exact<{
  slideId?: Maybe<Scalars['Int']>;
  pageId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
}>;


export type SendCommentMutation = { __typename?: 'mutation_root', insert_slideshare_Comment_one?: { __typename?: 'slideshare_Comment', id: number } | null | undefined };

export type InsertConferenceMutationVariables = Exact<{
  title: Scalars['String'];
  startDate: Scalars['numeric'];
  slideId: Scalars['Int'];
  endDate: Scalars['numeric'];
}>;


export type InsertConferenceMutation = { __typename?: 'mutation_root', insert_slideshare_Conference_one?: { __typename?: 'slideshare_Conference', id: number } | null | undefined };

export type UpdateConferenceStartDateMutationVariables = Exact<{
  conferenceId: Scalars['Int'];
  startDate: Scalars['numeric'];
}>;


export type UpdateConferenceStartDateMutation = { __typename?: 'mutation_root', update_slideshare_Conference_by_pk?: { __typename?: 'slideshare_Conference', id: number } | null | undefined };

export type UpdateConferenceMutationVariables = Exact<{
  conferenceId: Scalars['Int'];
  startDate: Scalars['numeric'];
  endDate: Scalars['numeric'];
  title: Scalars['String'];
}>;


export type UpdateConferenceMutation = { __typename?: 'mutation_root', update_slideshare_Conference_by_pk?: { __typename?: 'slideshare_Conference', id: number } | null | undefined };

export type QueryConferenceBySlideIdQueryVariables = Exact<{
  slideId: Scalars['Int'];
}>;


export type QueryConferenceBySlideIdQuery = { __typename?: 'query_root', slideshare_Conference: Array<{ __typename?: 'slideshare_Conference', id: number, startDate: any, endDate: any, createdAt: any, title?: string | null | undefined, updatedAt: any }> };

export type QueryConferenceByUserIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type QueryConferenceByUserIdQuery = { __typename?: 'query_root', slideshare_Conference: Array<{ __typename?: 'slideshare_Conference', id: number, startDate: any, endDate: any, createdAt: any, title?: string | null | undefined, updatedAt: any }> };

export type InsertSubscribeMutationVariables = Exact<{
  conferenceId: Scalars['Int'];
}>;


export type InsertSubscribeMutation = { __typename?: 'mutation_root', insert_slideshare_ConferenceSubscriber_one?: { __typename?: 'slideshare_ConferenceSubscriber', id: number } | null | undefined };

export type QuerySubscribeQueryVariables = Exact<{
  conferenceId: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
}>;


export type QuerySubscribeQuery = { __typename?: 'query_root', slideshare_ConferenceSubscriber: Array<{ __typename?: 'slideshare_ConferenceSubscriber', id: number }> };

export type CreateSlideMutationVariables = Exact<{
  status: Scalars['String'];
}>;


export type CreateSlideMutation = { __typename?: 'mutation_root', insert_slideshare_Slide_one?: { __typename?: 'slideshare_Slide', id: number, Pages: Array<{ __typename?: 'slideshare_Page', id: string, type: Slideshare_PageType_Enum, text?: string | null | undefined, pageNumber: number, imageUrl?: string | null | undefined, videoUrl?: string | null | undefined, createdAt?: any | null | undefined }> } | null | undefined };

export type InsertFileMutationVariables = Exact<{
  pageId: Scalars['String'];
  path: Scalars['String'];
  filename: Scalars['String'];
}>;


export type InsertFileMutation = { __typename?: 'mutation_root', insert_slideshare_File_one?: { __typename?: 'slideshare_File', id: number } | null | undefined };

export type DeleteFileMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteFileMutation = { __typename?: 'mutation_root', delete_slideshare_File_by_pk?: { __typename?: 'slideshare_File', id: number } | null | undefined };

export type FollowMutationVariables = Exact<{
  follow_user_id: Scalars['String'];
}>;


export type FollowMutation = { __typename?: 'mutation_root', insert_slideshare_Follower_one?: { __typename?: 'slideshare_Follower', follow_user_id: string } | null | undefined };

export type UnfollowMutationVariables = Exact<{
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
}>;


export type UnfollowMutation = { __typename?: 'mutation_root', delete_slideshare_Follower_by_pk?: { __typename?: 'slideshare_Follower', follow_user_id: string } | null | undefined };

export type IsFollowQueryVariables = Exact<{
  follow_user_id: Scalars['String'];
  follower_user_id: Scalars['String'];
}>;


export type IsFollowQuery = { __typename?: 'query_root', slideshare_Follower_by_pk?: { __typename?: 'slideshare_Follower', follow_user_id: string } | null | undefined };

export type GenerateAgoraTokenMutationVariables = Exact<{
  channelName: Scalars['String'];
  uid?: Maybe<Scalars['String']>;
  host: Scalars['String'];
}>;


export type GenerateAgoraTokenMutation = { __typename?: 'mutation_root', GenerateAgoraToken?: { __typename?: 'GenerateAgoraTokenOutput', token?: string | null | undefined } | null | undefined };

export type InsertPollMutationVariables = Exact<{
  option1: Scalars['String'];
  option2: Scalars['String'];
  option3?: Maybe<Scalars['String']>;
  option4?: Maybe<Scalars['String']>;
  pageId: Scalars['String'];
  question: Scalars['String'];
}>;


export type InsertPollMutation = { __typename?: 'mutation_root', insert_slideshare_Poll_one?: { __typename?: 'slideshare_Poll', pageId: string } | null | undefined };

export type SubscribePollResultsSubscriptionVariables = Exact<{
  pageId: Scalars['String'];
}>;


export type SubscribePollResultsSubscription = { __typename?: 'subscription_root', slideshare_Poll_by_pk?: { __typename?: 'slideshare_Poll', question: string, option1: string, option2: string, option3?: string | null | undefined, option4?: string | null | undefined, PollResults: Array<{ __typename?: 'slideshare_PollResult', id: number, optionNumber: number, createdBy: string }> } | null | undefined };

export type InsertPollResultMutationVariables = Exact<{
  createdBy: Scalars['String'];
  optionNumber: Scalars['Int'];
  pageId: Scalars['String'];
}>;


export type InsertPollResultMutation = { __typename?: 'mutation_root', insert_slideshare_PollResult_one?: { __typename?: 'slideshare_PollResult', id: number } | null | undefined };

export type SaveProfileMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
}>;


export type SaveProfileMutation = { __typename?: 'mutation_root', insert_slideshare_Profile_one?: { __typename?: 'slideshare_Profile', userId: string, name?: string | null | undefined, profile?: string | null | undefined, contribution: number } | null | undefined };

export type QueryProfileQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type QueryProfileQuery = { __typename?: 'query_root', slideshare_Profile_by_pk?: { __typename?: 'slideshare_Profile', contribution: number, name?: string | null | undefined, profile?: string | null | undefined, userId: string } | null | undefined };

export type QuerySlideQueryVariables = Exact<{
  slideId: Scalars['Int'];
}>;


export type QuerySlideQuery = { __typename?: 'query_root', slideshare_Slide_by_pk?: { __typename?: 'slideshare_Slide', id: number, createdBy: string, Pages: Array<{ __typename?: 'slideshare_Page', id: string, type: Slideshare_PageType_Enum, title?: string | null | undefined, text?: string | null | undefined, pageNumber: number, imageUrl?: string | null | undefined, videoUrl?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, slideId: number, Bookmarks: Array<{ __typename?: 'slideshare_Bookmark', id: number, url: string }>, Poll?: { __typename?: 'slideshare_Poll', question: string, option1: string, option2: string, option3?: string | null | undefined, option4?: string | null | undefined } | null | undefined, Files: Array<{ __typename?: 'slideshare_File', id: number, path: string, filename: string }> }> } | null | undefined, slideshare_Conference: Array<{ __typename?: 'slideshare_Conference', id: number, startDate: any, endDate: any, createdAt: any, title?: string | null | undefined, updatedAt: any }>, slideshare_SlideRecord: Array<{ __typename?: 'slideshare_SlideRecord', id: number, slideId: number, duration: number, audioUrl: string, createdAt: any, updatedAt: any, title: string, SlideRecordPieces: Array<{ __typename?: 'slideshare_SlideRecordPiece', id: number, pageId: string, slideRecordId: number, startTime: number }> }> };

export type SubscribeSlideSubscriptionVariables = Exact<{
  slideId: Scalars['Int'];
}>;


export type SubscribeSlideSubscription = { __typename?: 'subscription_root', slideshare_Slide_by_pk?: { __typename?: 'slideshare_Slide', id: number, createdBy: string, status: string, Pages: Array<{ __typename?: 'slideshare_Page', id: string, type: Slideshare_PageType_Enum, title?: string | null | undefined, text?: string | null | undefined, pageNumber: number, imageUrl?: string | null | undefined, videoUrl?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined, slideId: number, Bookmarks: Array<{ __typename?: 'slideshare_Bookmark', id: number, url: string }>, Poll?: { __typename?: 'slideshare_Poll', question: string, option1: string, option2: string, option3?: string | null | undefined, option4?: string | null | undefined } | null | undefined, Files: Array<{ __typename?: 'slideshare_File', id: number, path: string, filename: string }> }> } | null | undefined };

export type QueryUserSlideQueryVariables = Exact<{
  userId: Scalars['String'];
  offset: Scalars['Int'];
}>;


export type QueryUserSlideQuery = { __typename?: 'query_root', slideshare_Slide: Array<{ __typename?: 'slideshare_Slide', id: number, createdBy: string, status: string, Pages: Array<{ __typename?: 'slideshare_Page', id: string, type: Slideshare_PageType_Enum, imageUrl?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined }> }> };

export type SubscribeUserSlideSubscriptionVariables = Exact<{
  userId: Scalars['String'];
  limit: Scalars['Int'];
}>;


export type SubscribeUserSlideSubscription = { __typename?: 'subscription_root', slideshare_Slide: Array<{ __typename?: 'slideshare_Slide', id: number, createdBy: string, status: string, Pages: Array<{ __typename?: 'slideshare_Page', id: string, type: Slideshare_PageType_Enum, imageUrl?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined }> }> };

export type DeleteSlideMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSlideMutation = { __typename?: 'mutation_root', delete_slideshare_Slide_by_pk?: { __typename?: 'slideshare_Slide', id: number } | null | undefined };

export type CreateRoomMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreateRoomMutation = { __typename?: 'mutation_root', insert_slideshare_Room_one?: { __typename?: 'slideshare_Room', id: number } | null | undefined };

export type UpdateRoomMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
}>;


export type UpdateRoomMutation = { __typename?: 'mutation_root', update_slideshare_Room_by_pk?: { __typename?: 'slideshare_Room', id: number } | null | undefined };

export type UpdateRoomPresentationSlideIdMutationVariables = Exact<{
  id: Scalars['Int'];
  presentingSlide?: Maybe<Scalars['Int']>;
}>;


export type UpdateRoomPresentationSlideIdMutation = { __typename?: 'mutation_root', update_slideshare_Room_by_pk?: { __typename?: 'slideshare_Room', id: number } | null | undefined };

export type DeleteRoomMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteRoomMutation = { __typename?: 'mutation_root', delete_slideshare_Room_by_pk?: { __typename?: 'slideshare_Room', id: number } | null | undefined };

export type GetRoomQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetRoomQuery = { __typename?: 'query_root', slideshare_Room_by_pk?: { __typename?: 'slideshare_Room', id: number, name: string, description: string } | null | undefined };

export type RoomsSubscriptionVariables = Exact<{
  roomCreatedAt?: Maybe<Scalars['timestamptz']>;
  participantUpdatedAt?: Maybe<Scalars['timestamptz']>;
}>;


export type RoomsSubscription = { __typename?: 'subscription_root', slideshare_Room: Array<{ __typename?: 'slideshare_Room', id: number, description: string, name: string, createdAt: any, updatedAt: any, createdBy: string, Slide?: { __typename?: 'slideshare_Slide', id: number, status: string, Pages: Array<{ __typename?: 'slideshare_Page', imageUrl?: string | null | undefined }> } | null | undefined, RoomParticipants: Array<{ __typename?: 'slideshare_RoomParticipant', userId: string, Profile: { __typename?: 'slideshare_Profile', name?: string | null | undefined, profile?: string | null | undefined }, Slide?: { __typename?: 'slideshare_Slide', id: number, status: string, Pages: Array<{ __typename?: 'slideshare_Page', imageUrl?: string | null | undefined }> } | null | undefined }> }> };

export type JoinRoomMutationMutationVariables = Exact<{
  roomId?: Maybe<Scalars['Int']>;
}>;


export type JoinRoomMutationMutation = { __typename?: 'mutation_root', insert_slideshare_RoomParticipant_one?: { __typename?: 'slideshare_RoomParticipant', roomId?: number | null | undefined } | null | undefined };

export type UpdateRoomParticipantMutationMutationVariables = Exact<{
  userId: Scalars['String'];
  slideId: Scalars['Int'];
}>;


export type UpdateRoomParticipantMutationMutation = { __typename?: 'mutation_root', update_slideshare_RoomParticipant_by_pk?: { __typename?: 'slideshare_RoomParticipant', roomId?: number | null | undefined } | null | undefined };

export type StartSlideRecordMutationVariables = Exact<{
  audioUrl: Scalars['String'];
  slideId: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
}>;


export type StartSlideRecordMutation = { __typename?: 'mutation_root', insert_slideshare_SlideRecord_one?: { __typename?: 'slideshare_SlideRecord', id: number } | null | undefined };

export type AddSlideRecordPieceMutationVariables = Exact<{
  pageId: Scalars['String'];
  slideRecordId: Scalars['Int'];
  startTime: Scalars['Int'];
}>;


export type AddSlideRecordPieceMutation = { __typename?: 'mutation_root', insert_slideshare_SlideRecordPiece_one?: { __typename?: 'slideshare_SlideRecordPiece', id: number } | null | undefined };

export type UpdateDurationMutationVariables = Exact<{
  id: Scalars['Int'];
  duration: Scalars['Int'];
}>;


export type UpdateDurationMutation = { __typename?: 'mutation_root', update_slideshare_SlideRecord_by_pk?: { __typename?: 'slideshare_SlideRecord', duration: number } | null | undefined };

export type DeleteRecordMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteRecordMutation = { __typename?: 'mutation_root', delete_slideshare_SlideRecord_by_pk?: { __typename?: 'slideshare_SlideRecord', id: number } | null | undefined };

export type SlideRecordQueryVariables = Exact<{
  slideId?: Maybe<Scalars['Int']>;
}>;


export type SlideRecordQuery = { __typename?: 'query_root', slideshare_SlideRecord: Array<{ __typename?: 'slideshare_SlideRecord', id: number, audioUrl: string, duration: number, title: string, SlideRecordPieces: Array<{ __typename?: 'slideshare_SlideRecordPiece', id: number, pageId: string, startTime: number }> }> };

export type UploadPdfMutationVariables = Exact<{
  pdfName: Scalars['String'];
  slideId: Scalars['Int'];
}>;


export type UploadPdfMutation = { __typename?: 'mutation_root', uploadPdf?: { __typename?: 'UploadPdfOutput', slideId: number } | null | undefined };


export const UpdatePageDocument = gql`
    mutation UpdatePage($id: String!, $object: slideshare_Page_set_input) {
  update_slideshare_Page_by_pk(pk_columns: {id: $id}, _set: $object) {
    id
  }
}
    `;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutation, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageMutation, UpdatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UpdatePageDocument, options);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutation, UpdatePageMutationVariables>;
export const UpdatePageNumberDocument = gql`
    mutation UpdatePageNumber($objects: [slideshare_Page_insert_input!]!) {
  insert_slideshare_Page(
    objects: $objects
    on_conflict: {constraint: Page_pkey, update_columns: pageNumber}
  ) {
    affected_rows
  }
}
    `;
export type UpdatePageNumberMutationFn = Apollo.MutationFunction<UpdatePageNumberMutation, UpdatePageNumberMutationVariables>;

/**
 * __useUpdatePageNumberMutation__
 *
 * To run a mutation, you first call `useUpdatePageNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageNumberMutation, { data, loading, error }] = useUpdatePageNumberMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useUpdatePageNumberMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageNumberMutation, UpdatePageNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePageNumberMutation, UpdatePageNumberMutationVariables>(UpdatePageNumberDocument, options);
      }
export type UpdatePageNumberMutationHookResult = ReturnType<typeof useUpdatePageNumberMutation>;
export type UpdatePageNumberMutationResult = Apollo.MutationResult<UpdatePageNumberMutation>;
export type UpdatePageNumberMutationOptions = Apollo.BaseMutationOptions<UpdatePageNumberMutation, UpdatePageNumberMutationVariables>;
export const UpdatePagesDocument = gql`
    mutation UpdatePages($id: String!, $object: slideshare_Page_set_input) {
  update_slideshare_Page_by_pk(pk_columns: {id: $id}, _set: $object) {
    id
  }
}
    `;
export type UpdatePagesMutationFn = Apollo.MutationFunction<UpdatePagesMutation, UpdatePagesMutationVariables>;

/**
 * __useUpdatePagesMutation__
 *
 * To run a mutation, you first call `useUpdatePagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePagesMutation, { data, loading, error }] = useUpdatePagesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdatePagesMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePagesMutation, UpdatePagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePagesMutation, UpdatePagesMutationVariables>(UpdatePagesDocument, options);
      }
export type UpdatePagesMutationHookResult = ReturnType<typeof useUpdatePagesMutation>;
export type UpdatePagesMutationResult = Apollo.MutationResult<UpdatePagesMutation>;
export type UpdatePagesMutationOptions = Apollo.BaseMutationOptions<UpdatePagesMutation, UpdatePagesMutationVariables>;
export const InsertPageDocument = gql`
    mutation InsertPage($object: slideshare_Page_insert_input = {}) {
  insert_slideshare_Page_one(object: $object) {
    id
    pageNumber
    imageUrl
    isVisible
    slideId
    text
    type
    videoUrl
  }
}
    `;
export type InsertPageMutationFn = Apollo.MutationFunction<InsertPageMutation, InsertPageMutationVariables>;

/**
 * __useInsertPageMutation__
 *
 * To run a mutation, you first call `useInsertPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPageMutation, { data, loading, error }] = useInsertPageMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertPageMutation(baseOptions?: Apollo.MutationHookOptions<InsertPageMutation, InsertPageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPageMutation, InsertPageMutationVariables>(InsertPageDocument, options);
      }
export type InsertPageMutationHookResult = ReturnType<typeof useInsertPageMutation>;
export type InsertPageMutationResult = Apollo.MutationResult<InsertPageMutation>;
export type InsertPageMutationOptions = Apollo.BaseMutationOptions<InsertPageMutation, InsertPageMutationVariables>;
export const DeletePageDocument = gql`
    mutation DeletePage($id: String!) {
  delete_slideshare_Page_by_pk(id: $id) {
    id
  }
}
    `;
export type DeletePageMutationFn = Apollo.MutationFunction<DeletePageMutation, DeletePageMutationVariables>;

/**
 * __useDeletePageMutation__
 *
 * To run a mutation, you first call `useDeletePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageMutation, { data, loading, error }] = useDeletePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePageMutation(baseOptions?: Apollo.MutationHookOptions<DeletePageMutation, DeletePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePageMutation, DeletePageMutationVariables>(DeletePageDocument, options);
      }
export type DeletePageMutationHookResult = ReturnType<typeof useDeletePageMutation>;
export type DeletePageMutationResult = Apollo.MutationResult<DeletePageMutation>;
export type DeletePageMutationOptions = Apollo.BaseMutationOptions<DeletePageMutation, DeletePageMutationVariables>;
export const InsertBookmarkDocument = gql`
    mutation insertBookmark($pageId: String!, $url: String!) {
  insert_slideshare_Bookmark_one(object: {pageId: $pageId, url: $url}) {
    id
  }
}
    `;
export type InsertBookmarkMutationFn = Apollo.MutationFunction<InsertBookmarkMutation, InsertBookmarkMutationVariables>;

/**
 * __useInsertBookmarkMutation__
 *
 * To run a mutation, you first call `useInsertBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBookmarkMutation, { data, loading, error }] = useInsertBookmarkMutation({
 *   variables: {
 *      pageId: // value for 'pageId'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useInsertBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<InsertBookmarkMutation, InsertBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertBookmarkMutation, InsertBookmarkMutationVariables>(InsertBookmarkDocument, options);
      }
export type InsertBookmarkMutationHookResult = ReturnType<typeof useInsertBookmarkMutation>;
export type InsertBookmarkMutationResult = Apollo.MutationResult<InsertBookmarkMutation>;
export type InsertBookmarkMutationOptions = Apollo.BaseMutationOptions<InsertBookmarkMutation, InsertBookmarkMutationVariables>;
export const DeleteBookmarkDocument = gql`
    mutation deleteBookmark($id: Int!) {
  delete_slideshare_Bookmark_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;

/**
 * __useDeleteBookmarkMutation__
 *
 * To run a mutation, you first call `useDeleteBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookmarkMutation, { data, loading, error }] = useDeleteBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(DeleteBookmarkDocument, options);
      }
export type DeleteBookmarkMutationHookResult = ReturnType<typeof useDeleteBookmarkMutation>;
export type DeleteBookmarkMutationResult = Apollo.MutationResult<DeleteBookmarkMutation>;
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export const QueryCommentDocument = gql`
    subscription queryComment($slideId: Int) {
  slideshare_Comment(
    where: {slideId: {_eq: $slideId}}
    order_by: {createdAt: desc}
  ) {
    id
    slideId
    pageId
    Page {
      pageNumber
    }
    Profile {
      profile
      name
    }
    text
    createdBy
    createdAt
  }
}
    `;

/**
 * __useQueryCommentSubscription__
 *
 * To run a query within a React component, call `useQueryCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useQueryCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryCommentSubscription({
 *   variables: {
 *      slideId: // value for 'slideId'
 *   },
 * });
 */
export function useQueryCommentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<QueryCommentSubscription, QueryCommentSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<QueryCommentSubscription, QueryCommentSubscriptionVariables>(QueryCommentDocument, options);
      }
export type QueryCommentSubscriptionHookResult = ReturnType<typeof useQueryCommentSubscription>;
export type QueryCommentSubscriptionResult = Apollo.SubscriptionResult<QueryCommentSubscription>;
export const SendCommentDocument = gql`
    mutation sendComment($slideId: Int, $pageId: String, $text: String) {
  insert_slideshare_Comment_one(
    object: {slideId: $slideId, pageId: $pageId, text: $text}
  ) {
    id
  }
}
    `;
export type SendCommentMutationFn = Apollo.MutationFunction<SendCommentMutation, SendCommentMutationVariables>;

/**
 * __useSendCommentMutation__
 *
 * To run a mutation, you first call `useSendCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCommentMutation, { data, loading, error }] = useSendCommentMutation({
 *   variables: {
 *      slideId: // value for 'slideId'
 *      pageId: // value for 'pageId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSendCommentMutation(baseOptions?: Apollo.MutationHookOptions<SendCommentMutation, SendCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCommentMutation, SendCommentMutationVariables>(SendCommentDocument, options);
      }
export type SendCommentMutationHookResult = ReturnType<typeof useSendCommentMutation>;
export type SendCommentMutationResult = Apollo.MutationResult<SendCommentMutation>;
export type SendCommentMutationOptions = Apollo.BaseMutationOptions<SendCommentMutation, SendCommentMutationVariables>;
export const InsertConferenceDocument = gql`
    mutation insertConference($title: String!, $startDate: numeric!, $slideId: Int!, $endDate: numeric!) {
  insert_slideshare_Conference_one(
    object: {title: $title, startDate: $startDate, slideId: $slideId, endDate: $endDate}
  ) {
    id
  }
}
    `;
export type InsertConferenceMutationFn = Apollo.MutationFunction<InsertConferenceMutation, InsertConferenceMutationVariables>;

/**
 * __useInsertConferenceMutation__
 *
 * To run a mutation, you first call `useInsertConferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertConferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertConferenceMutation, { data, loading, error }] = useInsertConferenceMutation({
 *   variables: {
 *      title: // value for 'title'
 *      startDate: // value for 'startDate'
 *      slideId: // value for 'slideId'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useInsertConferenceMutation(baseOptions?: Apollo.MutationHookOptions<InsertConferenceMutation, InsertConferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertConferenceMutation, InsertConferenceMutationVariables>(InsertConferenceDocument, options);
      }
export type InsertConferenceMutationHookResult = ReturnType<typeof useInsertConferenceMutation>;
export type InsertConferenceMutationResult = Apollo.MutationResult<InsertConferenceMutation>;
export type InsertConferenceMutationOptions = Apollo.BaseMutationOptions<InsertConferenceMutation, InsertConferenceMutationVariables>;
export const UpdateConferenceStartDateDocument = gql`
    mutation updateConferenceStartDate($conferenceId: Int!, $startDate: numeric!) {
  update_slideshare_Conference_by_pk(
    pk_columns: {id: $conferenceId}
    _set: {startDate: $startDate}
  ) {
    id
  }
}
    `;
export type UpdateConferenceStartDateMutationFn = Apollo.MutationFunction<UpdateConferenceStartDateMutation, UpdateConferenceStartDateMutationVariables>;

/**
 * __useUpdateConferenceStartDateMutation__
 *
 * To run a mutation, you first call `useUpdateConferenceStartDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConferenceStartDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConferenceStartDateMutation, { data, loading, error }] = useUpdateConferenceStartDateMutation({
 *   variables: {
 *      conferenceId: // value for 'conferenceId'
 *      startDate: // value for 'startDate'
 *   },
 * });
 */
export function useUpdateConferenceStartDateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConferenceStartDateMutation, UpdateConferenceStartDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConferenceStartDateMutation, UpdateConferenceStartDateMutationVariables>(UpdateConferenceStartDateDocument, options);
      }
export type UpdateConferenceStartDateMutationHookResult = ReturnType<typeof useUpdateConferenceStartDateMutation>;
export type UpdateConferenceStartDateMutationResult = Apollo.MutationResult<UpdateConferenceStartDateMutation>;
export type UpdateConferenceStartDateMutationOptions = Apollo.BaseMutationOptions<UpdateConferenceStartDateMutation, UpdateConferenceStartDateMutationVariables>;
export const UpdateConferenceDocument = gql`
    mutation updateConference($conferenceId: Int!, $startDate: numeric!, $endDate: numeric!, $title: String!) {
  update_slideshare_Conference_by_pk(
    pk_columns: {id: $conferenceId}
    _set: {startDate: $startDate, endDate: $endDate, title: $title}
  ) {
    id
  }
}
    `;
export type UpdateConferenceMutationFn = Apollo.MutationFunction<UpdateConferenceMutation, UpdateConferenceMutationVariables>;

/**
 * __useUpdateConferenceMutation__
 *
 * To run a mutation, you first call `useUpdateConferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConferenceMutation, { data, loading, error }] = useUpdateConferenceMutation({
 *   variables: {
 *      conferenceId: // value for 'conferenceId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateConferenceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConferenceMutation, UpdateConferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConferenceMutation, UpdateConferenceMutationVariables>(UpdateConferenceDocument, options);
      }
export type UpdateConferenceMutationHookResult = ReturnType<typeof useUpdateConferenceMutation>;
export type UpdateConferenceMutationResult = Apollo.MutationResult<UpdateConferenceMutation>;
export type UpdateConferenceMutationOptions = Apollo.BaseMutationOptions<UpdateConferenceMutation, UpdateConferenceMutationVariables>;
export const QueryConferenceBySlideIdDocument = gql`
    query queryConferenceBySlideId($slideId: Int!) {
  slideshare_Conference(
    where: {slideId: {_eq: $slideId}}
    order_by: {createdAt: desc}
  ) {
    id
    startDate
    endDate
    createdAt
    title
    updatedAt
  }
}
    `;

/**
 * __useQueryConferenceBySlideIdQuery__
 *
 * To run a query within a React component, call `useQueryConferenceBySlideIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryConferenceBySlideIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryConferenceBySlideIdQuery({
 *   variables: {
 *      slideId: // value for 'slideId'
 *   },
 * });
 */
export function useQueryConferenceBySlideIdQuery(baseOptions: Apollo.QueryHookOptions<QueryConferenceBySlideIdQuery, QueryConferenceBySlideIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryConferenceBySlideIdQuery, QueryConferenceBySlideIdQueryVariables>(QueryConferenceBySlideIdDocument, options);
      }
export function useQueryConferenceBySlideIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryConferenceBySlideIdQuery, QueryConferenceBySlideIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryConferenceBySlideIdQuery, QueryConferenceBySlideIdQueryVariables>(QueryConferenceBySlideIdDocument, options);
        }
export type QueryConferenceBySlideIdQueryHookResult = ReturnType<typeof useQueryConferenceBySlideIdQuery>;
export type QueryConferenceBySlideIdLazyQueryHookResult = ReturnType<typeof useQueryConferenceBySlideIdLazyQuery>;
export type QueryConferenceBySlideIdQueryResult = Apollo.QueryResult<QueryConferenceBySlideIdQuery, QueryConferenceBySlideIdQueryVariables>;
export const QueryConferenceByUserIdDocument = gql`
    query queryConferenceByUserId($userId: String!) {
  slideshare_Conference(
    where: {createdBy: {_eq: $userId}}
    order_by: {createdAt: desc}
  ) {
    id
    startDate
    endDate
    createdAt
    title
    updatedAt
  }
}
    `;

/**
 * __useQueryConferenceByUserIdQuery__
 *
 * To run a query within a React component, call `useQueryConferenceByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryConferenceByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryConferenceByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQueryConferenceByUserIdQuery(baseOptions: Apollo.QueryHookOptions<QueryConferenceByUserIdQuery, QueryConferenceByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryConferenceByUserIdQuery, QueryConferenceByUserIdQueryVariables>(QueryConferenceByUserIdDocument, options);
      }
export function useQueryConferenceByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryConferenceByUserIdQuery, QueryConferenceByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryConferenceByUserIdQuery, QueryConferenceByUserIdQueryVariables>(QueryConferenceByUserIdDocument, options);
        }
export type QueryConferenceByUserIdQueryHookResult = ReturnType<typeof useQueryConferenceByUserIdQuery>;
export type QueryConferenceByUserIdLazyQueryHookResult = ReturnType<typeof useQueryConferenceByUserIdLazyQuery>;
export type QueryConferenceByUserIdQueryResult = Apollo.QueryResult<QueryConferenceByUserIdQuery, QueryConferenceByUserIdQueryVariables>;
export const InsertSubscribeDocument = gql`
    mutation insertSubscribe($conferenceId: Int!) {
  insert_slideshare_ConferenceSubscriber_one(
    object: {conferenceId: $conferenceId}
  ) {
    id
  }
}
    `;
export type InsertSubscribeMutationFn = Apollo.MutationFunction<InsertSubscribeMutation, InsertSubscribeMutationVariables>;

/**
 * __useInsertSubscribeMutation__
 *
 * To run a mutation, you first call `useInsertSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSubscribeMutation, { data, loading, error }] = useInsertSubscribeMutation({
 *   variables: {
 *      conferenceId: // value for 'conferenceId'
 *   },
 * });
 */
export function useInsertSubscribeMutation(baseOptions?: Apollo.MutationHookOptions<InsertSubscribeMutation, InsertSubscribeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSubscribeMutation, InsertSubscribeMutationVariables>(InsertSubscribeDocument, options);
      }
export type InsertSubscribeMutationHookResult = ReturnType<typeof useInsertSubscribeMutation>;
export type InsertSubscribeMutationResult = Apollo.MutationResult<InsertSubscribeMutation>;
export type InsertSubscribeMutationOptions = Apollo.BaseMutationOptions<InsertSubscribeMutation, InsertSubscribeMutationVariables>;
export const QuerySubscribeDocument = gql`
    query querySubscribe($conferenceId: Int!, $userId: String) {
  slideshare_ConferenceSubscriber(
    where: {conferenceId: {_eq: $conferenceId}, _and: {userId: {_eq: $userId}}}
  ) {
    id
  }
}
    `;

/**
 * __useQuerySubscribeQuery__
 *
 * To run a query within a React component, call `useQuerySubscribeQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuerySubscribeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuerySubscribeQuery({
 *   variables: {
 *      conferenceId: // value for 'conferenceId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQuerySubscribeQuery(baseOptions: Apollo.QueryHookOptions<QuerySubscribeQuery, QuerySubscribeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuerySubscribeQuery, QuerySubscribeQueryVariables>(QuerySubscribeDocument, options);
      }
export function useQuerySubscribeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuerySubscribeQuery, QuerySubscribeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuerySubscribeQuery, QuerySubscribeQueryVariables>(QuerySubscribeDocument, options);
        }
export type QuerySubscribeQueryHookResult = ReturnType<typeof useQuerySubscribeQuery>;
export type QuerySubscribeLazyQueryHookResult = ReturnType<typeof useQuerySubscribeLazyQuery>;
export type QuerySubscribeQueryResult = Apollo.QueryResult<QuerySubscribeQuery, QuerySubscribeQueryVariables>;
export const CreateSlideDocument = gql`
    mutation createSlide($status: String!) {
  insert_slideshare_Slide_one(object: {status: $status}) {
    id
    Pages {
      id
      type
      text
      pageNumber
      imageUrl
      videoUrl
      createdAt
    }
  }
}
    `;
export type CreateSlideMutationFn = Apollo.MutationFunction<CreateSlideMutation, CreateSlideMutationVariables>;

/**
 * __useCreateSlideMutation__
 *
 * To run a mutation, you first call `useCreateSlideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSlideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSlideMutation, { data, loading, error }] = useCreateSlideMutation({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateSlideMutation(baseOptions?: Apollo.MutationHookOptions<CreateSlideMutation, CreateSlideMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSlideMutation, CreateSlideMutationVariables>(CreateSlideDocument, options);
      }
export type CreateSlideMutationHookResult = ReturnType<typeof useCreateSlideMutation>;
export type CreateSlideMutationResult = Apollo.MutationResult<CreateSlideMutation>;
export type CreateSlideMutationOptions = Apollo.BaseMutationOptions<CreateSlideMutation, CreateSlideMutationVariables>;
export const InsertFileDocument = gql`
    mutation insertFile($pageId: String!, $path: String!, $filename: String!) {
  insert_slideshare_File_one(
    object: {pageId: $pageId, path: $path, filename: $filename}
  ) {
    id
  }
}
    `;
export type InsertFileMutationFn = Apollo.MutationFunction<InsertFileMutation, InsertFileMutationVariables>;

/**
 * __useInsertFileMutation__
 *
 * To run a mutation, you first call `useInsertFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFileMutation, { data, loading, error }] = useInsertFileMutation({
 *   variables: {
 *      pageId: // value for 'pageId'
 *      path: // value for 'path'
 *      filename: // value for 'filename'
 *   },
 * });
 */
export function useInsertFileMutation(baseOptions?: Apollo.MutationHookOptions<InsertFileMutation, InsertFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertFileMutation, InsertFileMutationVariables>(InsertFileDocument, options);
      }
export type InsertFileMutationHookResult = ReturnType<typeof useInsertFileMutation>;
export type InsertFileMutationResult = Apollo.MutationResult<InsertFileMutation>;
export type InsertFileMutationOptions = Apollo.BaseMutationOptions<InsertFileMutation, InsertFileMutationVariables>;
export const DeleteFileDocument = gql`
    mutation deleteFile($id: Int!) {
  delete_slideshare_File_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const FollowDocument = gql`
    mutation follow($follow_user_id: String!) {
  insert_slideshare_Follower_one(object: {follow_user_id: $follow_user_id}) {
    follow_user_id
  }
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      follow_user_id: // value for 'follow_user_id'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const UnfollowDocument = gql`
    mutation unfollow($follow_user_id: String!, $follower_user_id: String!) {
  delete_slideshare_Follower_by_pk(
    follow_user_id: $follow_user_id
    follower_user_id: $follower_user_id
  ) {
    follow_user_id
  }
}
    `;
export type UnfollowMutationFn = Apollo.MutationFunction<UnfollowMutation, UnfollowMutationVariables>;

/**
 * __useUnfollowMutation__
 *
 * To run a mutation, you first call `useUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowMutation, { data, loading, error }] = useUnfollowMutation({
 *   variables: {
 *      follow_user_id: // value for 'follow_user_id'
 *      follower_user_id: // value for 'follower_user_id'
 *   },
 * });
 */
export function useUnfollowMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowMutation, UnfollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfollowMutation, UnfollowMutationVariables>(UnfollowDocument, options);
      }
export type UnfollowMutationHookResult = ReturnType<typeof useUnfollowMutation>;
export type UnfollowMutationResult = Apollo.MutationResult<UnfollowMutation>;
export type UnfollowMutationOptions = Apollo.BaseMutationOptions<UnfollowMutation, UnfollowMutationVariables>;
export const IsFollowDocument = gql`
    query isFollow($follow_user_id: String!, $follower_user_id: String!) {
  slideshare_Follower_by_pk(
    follow_user_id: $follow_user_id
    follower_user_id: $follower_user_id
  ) {
    follow_user_id
  }
}
    `;

/**
 * __useIsFollowQuery__
 *
 * To run a query within a React component, call `useIsFollowQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFollowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFollowQuery({
 *   variables: {
 *      follow_user_id: // value for 'follow_user_id'
 *      follower_user_id: // value for 'follower_user_id'
 *   },
 * });
 */
export function useIsFollowQuery(baseOptions: Apollo.QueryHookOptions<IsFollowQuery, IsFollowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsFollowQuery, IsFollowQueryVariables>(IsFollowDocument, options);
      }
export function useIsFollowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsFollowQuery, IsFollowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsFollowQuery, IsFollowQueryVariables>(IsFollowDocument, options);
        }
export type IsFollowQueryHookResult = ReturnType<typeof useIsFollowQuery>;
export type IsFollowLazyQueryHookResult = ReturnType<typeof useIsFollowLazyQuery>;
export type IsFollowQueryResult = Apollo.QueryResult<IsFollowQuery, IsFollowQueryVariables>;
export const GenerateAgoraTokenDocument = gql`
    mutation GenerateAgoraToken($channelName: String!, $uid: String, $host: String!) {
  GenerateAgoraToken(input: {channelName: $channelName, uid: $uid, host: $host}) {
    token
  }
}
    `;
export type GenerateAgoraTokenMutationFn = Apollo.MutationFunction<GenerateAgoraTokenMutation, GenerateAgoraTokenMutationVariables>;

/**
 * __useGenerateAgoraTokenMutation__
 *
 * To run a mutation, you first call `useGenerateAgoraTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateAgoraTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateAgoraTokenMutation, { data, loading, error }] = useGenerateAgoraTokenMutation({
 *   variables: {
 *      channelName: // value for 'channelName'
 *      uid: // value for 'uid'
 *      host: // value for 'host'
 *   },
 * });
 */
export function useGenerateAgoraTokenMutation(baseOptions?: Apollo.MutationHookOptions<GenerateAgoraTokenMutation, GenerateAgoraTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateAgoraTokenMutation, GenerateAgoraTokenMutationVariables>(GenerateAgoraTokenDocument, options);
      }
export type GenerateAgoraTokenMutationHookResult = ReturnType<typeof useGenerateAgoraTokenMutation>;
export type GenerateAgoraTokenMutationResult = Apollo.MutationResult<GenerateAgoraTokenMutation>;
export type GenerateAgoraTokenMutationOptions = Apollo.BaseMutationOptions<GenerateAgoraTokenMutation, GenerateAgoraTokenMutationVariables>;
export const InsertPollDocument = gql`
    mutation insertPoll($option1: String!, $option2: String!, $option3: String, $option4: String, $pageId: String!, $question: String!) {
  insert_slideshare_Poll_one(
    object: {question: $question, pageId: $pageId, option4: $option4, option3: $option3, option2: $option2, option1: $option1}
    on_conflict: {constraint: Poll_pkey, update_columns: [option1, option2, option3, option4, question]}
  ) {
    pageId
  }
}
    `;
export type InsertPollMutationFn = Apollo.MutationFunction<InsertPollMutation, InsertPollMutationVariables>;

/**
 * __useInsertPollMutation__
 *
 * To run a mutation, you first call `useInsertPollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPollMutation, { data, loading, error }] = useInsertPollMutation({
 *   variables: {
 *      option1: // value for 'option1'
 *      option2: // value for 'option2'
 *      option3: // value for 'option3'
 *      option4: // value for 'option4'
 *      pageId: // value for 'pageId'
 *      question: // value for 'question'
 *   },
 * });
 */
export function useInsertPollMutation(baseOptions?: Apollo.MutationHookOptions<InsertPollMutation, InsertPollMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPollMutation, InsertPollMutationVariables>(InsertPollDocument, options);
      }
export type InsertPollMutationHookResult = ReturnType<typeof useInsertPollMutation>;
export type InsertPollMutationResult = Apollo.MutationResult<InsertPollMutation>;
export type InsertPollMutationOptions = Apollo.BaseMutationOptions<InsertPollMutation, InsertPollMutationVariables>;
export const SubscribePollResultsDocument = gql`
    subscription subscribePollResults($pageId: String!) {
  slideshare_Poll_by_pk(pageId: $pageId) {
    question
    option1
    option2
    option3
    option4
    PollResults {
      id
      optionNumber
      createdBy
    }
  }
}
    `;

/**
 * __useSubscribePollResultsSubscription__
 *
 * To run a query within a React component, call `useSubscribePollResultsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribePollResultsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribePollResultsSubscription({
 *   variables: {
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useSubscribePollResultsSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubscribePollResultsSubscription, SubscribePollResultsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribePollResultsSubscription, SubscribePollResultsSubscriptionVariables>(SubscribePollResultsDocument, options);
      }
export type SubscribePollResultsSubscriptionHookResult = ReturnType<typeof useSubscribePollResultsSubscription>;
export type SubscribePollResultsSubscriptionResult = Apollo.SubscriptionResult<SubscribePollResultsSubscription>;
export const InsertPollResultDocument = gql`
    mutation insertPollResult($createdBy: String!, $optionNumber: Int!, $pageId: String!) {
  insert_slideshare_PollResult_one(
    object: {createdBy: $createdBy, optionNumber: $optionNumber, pageId: $pageId}
    on_conflict: {constraint: PollResult_pageId_createdBy_key, update_columns: optionNumber}
  ) {
    id
  }
}
    `;
export type InsertPollResultMutationFn = Apollo.MutationFunction<InsertPollResultMutation, InsertPollResultMutationVariables>;

/**
 * __useInsertPollResultMutation__
 *
 * To run a mutation, you first call `useInsertPollResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPollResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPollResultMutation, { data, loading, error }] = useInsertPollResultMutation({
 *   variables: {
 *      createdBy: // value for 'createdBy'
 *      optionNumber: // value for 'optionNumber'
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useInsertPollResultMutation(baseOptions?: Apollo.MutationHookOptions<InsertPollResultMutation, InsertPollResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertPollResultMutation, InsertPollResultMutationVariables>(InsertPollResultDocument, options);
      }
export type InsertPollResultMutationHookResult = ReturnType<typeof useInsertPollResultMutation>;
export type InsertPollResultMutationResult = Apollo.MutationResult<InsertPollResultMutation>;
export type InsertPollResultMutationOptions = Apollo.BaseMutationOptions<InsertPollResultMutation, InsertPollResultMutationVariables>;
export const SaveProfileDocument = gql`
    mutation saveProfile($name: String = "", $profile: String = "") {
  insert_slideshare_Profile_one(
    object: {name: $name, profile: $profile}
    on_conflict: {constraint: Profile_pkey, update_columns: [name, profile]}
  ) {
    userId
    name
    profile
    contribution
  }
}
    `;
export type SaveProfileMutationFn = Apollo.MutationFunction<SaveProfileMutation, SaveProfileMutationVariables>;

/**
 * __useSaveProfileMutation__
 *
 * To run a mutation, you first call `useSaveProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveProfileMutation, { data, loading, error }] = useSaveProfileMutation({
 *   variables: {
 *      name: // value for 'name'
 *      profile: // value for 'profile'
 *   },
 * });
 */
export function useSaveProfileMutation(baseOptions?: Apollo.MutationHookOptions<SaveProfileMutation, SaveProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveProfileMutation, SaveProfileMutationVariables>(SaveProfileDocument, options);
      }
export type SaveProfileMutationHookResult = ReturnType<typeof useSaveProfileMutation>;
export type SaveProfileMutationResult = Apollo.MutationResult<SaveProfileMutation>;
export type SaveProfileMutationOptions = Apollo.BaseMutationOptions<SaveProfileMutation, SaveProfileMutationVariables>;
export const QueryProfileDocument = gql`
    query queryProfile($userId: String!) {
  slideshare_Profile_by_pk(userId: $userId) {
    contribution
    name
    profile
    userId
  }
}
    `;

/**
 * __useQueryProfileQuery__
 *
 * To run a query within a React component, call `useQueryProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryProfileQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQueryProfileQuery(baseOptions: Apollo.QueryHookOptions<QueryProfileQuery, QueryProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryProfileQuery, QueryProfileQueryVariables>(QueryProfileDocument, options);
      }
export function useQueryProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryProfileQuery, QueryProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryProfileQuery, QueryProfileQueryVariables>(QueryProfileDocument, options);
        }
export type QueryProfileQueryHookResult = ReturnType<typeof useQueryProfileQuery>;
export type QueryProfileLazyQueryHookResult = ReturnType<typeof useQueryProfileLazyQuery>;
export type QueryProfileQueryResult = Apollo.QueryResult<QueryProfileQuery, QueryProfileQueryVariables>;
export const QuerySlideDocument = gql`
    query querySlide($slideId: Int!) {
  slideshare_Slide_by_pk(id: $slideId) {
    id
    createdBy
    Pages(order_by: {pageNumber: asc}) {
      id
      type
      title
      text
      pageNumber
      imageUrl
      videoUrl
      createdAt
      updatedAt
      slideId
      Bookmarks {
        id
        url
      }
      Poll {
        question
        option1
        option2
        option3
        option4
      }
      Files {
        id
        path
        filename
      }
    }
  }
  slideshare_Conference(
    where: {slideId: {_eq: $slideId}}
    order_by: {createdAt: desc}
    limit: 1
  ) {
    id
    startDate
    endDate
    createdAt
    title
    updatedAt
  }
  slideshare_SlideRecord(
    where: {slideId: {_eq: $slideId}}
    order_by: {createdAt: desc}
  ) {
    id
    slideId
    duration
    audioUrl
    createdAt
    updatedAt
    title
    SlideRecordPieces(order_by: {startTime: desc}) {
      id
      pageId
      slideRecordId
      startTime
    }
  }
}
    `;

/**
 * __useQuerySlideQuery__
 *
 * To run a query within a React component, call `useQuerySlideQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuerySlideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuerySlideQuery({
 *   variables: {
 *      slideId: // value for 'slideId'
 *   },
 * });
 */
export function useQuerySlideQuery(baseOptions: Apollo.QueryHookOptions<QuerySlideQuery, QuerySlideQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuerySlideQuery, QuerySlideQueryVariables>(QuerySlideDocument, options);
      }
export function useQuerySlideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuerySlideQuery, QuerySlideQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuerySlideQuery, QuerySlideQueryVariables>(QuerySlideDocument, options);
        }
export type QuerySlideQueryHookResult = ReturnType<typeof useQuerySlideQuery>;
export type QuerySlideLazyQueryHookResult = ReturnType<typeof useQuerySlideLazyQuery>;
export type QuerySlideQueryResult = Apollo.QueryResult<QuerySlideQuery, QuerySlideQueryVariables>;
export const SubscribeSlideDocument = gql`
    subscription subscribeSlide($slideId: Int!) {
  slideshare_Slide_by_pk(id: $slideId) {
    id
    createdBy
    status
    Pages(order_by: {pageNumber: asc}) {
      id
      type
      title
      text
      pageNumber
      imageUrl
      videoUrl
      createdAt
      updatedAt
      slideId
      Bookmarks {
        id
        url
      }
      Poll {
        question
        option1
        option2
        option3
        option4
      }
      Files {
        id
        path
        filename
      }
    }
  }
}
    `;

/**
 * __useSubscribeSlideSubscription__
 *
 * To run a query within a React component, call `useSubscribeSlideSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeSlideSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeSlideSubscription({
 *   variables: {
 *      slideId: // value for 'slideId'
 *   },
 * });
 */
export function useSubscribeSlideSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubscribeSlideSubscription, SubscribeSlideSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeSlideSubscription, SubscribeSlideSubscriptionVariables>(SubscribeSlideDocument, options);
      }
export type SubscribeSlideSubscriptionHookResult = ReturnType<typeof useSubscribeSlideSubscription>;
export type SubscribeSlideSubscriptionResult = Apollo.SubscriptionResult<SubscribeSlideSubscription>;
export const QueryUserSlideDocument = gql`
    query queryUserSlide($userId: String!, $offset: Int!) {
  slideshare_Slide(
    where: {createdBy: {_eq: $userId}}
    order_by: {createdAt: desc}
    offset: $offset
    limit: 10
  ) {
    id
    createdBy
    status
    Pages(where: {pageNumber: {_eq: 0}}, limit: 1) {
      id
      type
      imageUrl
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useQueryUserSlideQuery__
 *
 * To run a query within a React component, call `useQueryUserSlideQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserSlideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserSlideQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useQueryUserSlideQuery(baseOptions: Apollo.QueryHookOptions<QueryUserSlideQuery, QueryUserSlideQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserSlideQuery, QueryUserSlideQueryVariables>(QueryUserSlideDocument, options);
      }
export function useQueryUserSlideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserSlideQuery, QueryUserSlideQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserSlideQuery, QueryUserSlideQueryVariables>(QueryUserSlideDocument, options);
        }
export type QueryUserSlideQueryHookResult = ReturnType<typeof useQueryUserSlideQuery>;
export type QueryUserSlideLazyQueryHookResult = ReturnType<typeof useQueryUserSlideLazyQuery>;
export type QueryUserSlideQueryResult = Apollo.QueryResult<QueryUserSlideQuery, QueryUserSlideQueryVariables>;
export const SubscribeUserSlideDocument = gql`
    subscription subscribeUserSlide($userId: String!, $limit: Int!) {
  slideshare_Slide(
    where: {createdBy: {_eq: $userId}}
    order_by: {createdAt: desc}
    limit: $limit
  ) {
    id
    createdBy
    status
    Pages(where: {pageNumber: {_eq: 0}}, limit: 1) {
      id
      type
      imageUrl
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useSubscribeUserSlideSubscription__
 *
 * To run a query within a React component, call `useSubscribeUserSlideSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeUserSlideSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeUserSlideSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSubscribeUserSlideSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubscribeUserSlideSubscription, SubscribeUserSlideSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeUserSlideSubscription, SubscribeUserSlideSubscriptionVariables>(SubscribeUserSlideDocument, options);
      }
export type SubscribeUserSlideSubscriptionHookResult = ReturnType<typeof useSubscribeUserSlideSubscription>;
export type SubscribeUserSlideSubscriptionResult = Apollo.SubscriptionResult<SubscribeUserSlideSubscription>;
export const DeleteSlideDocument = gql`
    mutation deleteSlide($id: Int!) {
  delete_slideshare_Slide_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteSlideMutationFn = Apollo.MutationFunction<DeleteSlideMutation, DeleteSlideMutationVariables>;

/**
 * __useDeleteSlideMutation__
 *
 * To run a mutation, you first call `useDeleteSlideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSlideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSlideMutation, { data, loading, error }] = useDeleteSlideMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSlideMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSlideMutation, DeleteSlideMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSlideMutation, DeleteSlideMutationVariables>(DeleteSlideDocument, options);
      }
export type DeleteSlideMutationHookResult = ReturnType<typeof useDeleteSlideMutation>;
export type DeleteSlideMutationResult = Apollo.MutationResult<DeleteSlideMutation>;
export type DeleteSlideMutationOptions = Apollo.BaseMutationOptions<DeleteSlideMutation, DeleteSlideMutationVariables>;
export const CreateRoomDocument = gql`
    mutation createRoom($name: String!, $description: String!) {
  insert_slideshare_Room_one(object: {name: $name, description: $description}) {
    id
  }
}
    `;
export type CreateRoomMutationFn = Apollo.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, options);
      }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;
export const UpdateRoomDocument = gql`
    mutation updateRoom($name: String, $description: String, $id: Int!) {
  update_slideshare_Room_by_pk(
    pk_columns: {id: $id}
    _set: {description: $description, name: $name}
  ) {
    id
  }
}
    `;
export type UpdateRoomMutationFn = Apollo.MutationFunction<UpdateRoomMutation, UpdateRoomMutationVariables>;

/**
 * __useUpdateRoomMutation__
 *
 * To run a mutation, you first call `useUpdateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomMutation, { data, loading, error }] = useUpdateRoomMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateRoomMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoomMutation, UpdateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoomMutation, UpdateRoomMutationVariables>(UpdateRoomDocument, options);
      }
export type UpdateRoomMutationHookResult = ReturnType<typeof useUpdateRoomMutation>;
export type UpdateRoomMutationResult = Apollo.MutationResult<UpdateRoomMutation>;
export type UpdateRoomMutationOptions = Apollo.BaseMutationOptions<UpdateRoomMutation, UpdateRoomMutationVariables>;
export const UpdateRoomPresentationSlideIdDocument = gql`
    mutation updateRoomPresentationSlideId($id: Int!, $presentingSlide: Int) {
  update_slideshare_Room_by_pk(
    pk_columns: {id: $id}
    _set: {presentingSlide: $presentingSlide}
  ) {
    id
  }
}
    `;
export type UpdateRoomPresentationSlideIdMutationFn = Apollo.MutationFunction<UpdateRoomPresentationSlideIdMutation, UpdateRoomPresentationSlideIdMutationVariables>;

/**
 * __useUpdateRoomPresentationSlideIdMutation__
 *
 * To run a mutation, you first call `useUpdateRoomPresentationSlideIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomPresentationSlideIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomPresentationSlideIdMutation, { data, loading, error }] = useUpdateRoomPresentationSlideIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      presentingSlide: // value for 'presentingSlide'
 *   },
 * });
 */
export function useUpdateRoomPresentationSlideIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoomPresentationSlideIdMutation, UpdateRoomPresentationSlideIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoomPresentationSlideIdMutation, UpdateRoomPresentationSlideIdMutationVariables>(UpdateRoomPresentationSlideIdDocument, options);
      }
export type UpdateRoomPresentationSlideIdMutationHookResult = ReturnType<typeof useUpdateRoomPresentationSlideIdMutation>;
export type UpdateRoomPresentationSlideIdMutationResult = Apollo.MutationResult<UpdateRoomPresentationSlideIdMutation>;
export type UpdateRoomPresentationSlideIdMutationOptions = Apollo.BaseMutationOptions<UpdateRoomPresentationSlideIdMutation, UpdateRoomPresentationSlideIdMutationVariables>;
export const DeleteRoomDocument = gql`
    mutation deleteRoom($id: Int!) {
  delete_slideshare_Room_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteRoomMutationFn = Apollo.MutationFunction<DeleteRoomMutation, DeleteRoomMutationVariables>;

/**
 * __useDeleteRoomMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMutation, { data, loading, error }] = useDeleteRoomMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoomMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoomMutation, DeleteRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRoomMutation, DeleteRoomMutationVariables>(DeleteRoomDocument, options);
      }
export type DeleteRoomMutationHookResult = ReturnType<typeof useDeleteRoomMutation>;
export type DeleteRoomMutationResult = Apollo.MutationResult<DeleteRoomMutation>;
export type DeleteRoomMutationOptions = Apollo.BaseMutationOptions<DeleteRoomMutation, DeleteRoomMutationVariables>;
export const GetRoomDocument = gql`
    query getRoom($id: Int!) {
  slideshare_Room_by_pk(id: $id) {
    id
    name
    description
  }
}
    `;

/**
 * __useGetRoomQuery__
 *
 * To run a query within a React component, call `useGetRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoomQuery(baseOptions: Apollo.QueryHookOptions<GetRoomQuery, GetRoomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoomQuery, GetRoomQueryVariables>(GetRoomDocument, options);
      }
export function useGetRoomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoomQuery, GetRoomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoomQuery, GetRoomQueryVariables>(GetRoomDocument, options);
        }
export type GetRoomQueryHookResult = ReturnType<typeof useGetRoomQuery>;
export type GetRoomLazyQueryHookResult = ReturnType<typeof useGetRoomLazyQuery>;
export type GetRoomQueryResult = Apollo.QueryResult<GetRoomQuery, GetRoomQueryVariables>;
export const RoomsDocument = gql`
    subscription rooms($roomCreatedAt: timestamptz, $participantUpdatedAt: timestamptz) {
  slideshare_Room(where: {createdAt: {_gt: $roomCreatedAt}}) {
    id
    description
    Slide {
      id
      status
      Pages(order_by: {pageNumber: asc}, limit: 1) {
        imageUrl
      }
    }
    RoomParticipants(where: {updatedAt: {_gt: $participantUpdatedAt}}) {
      userId
      Profile {
        name
        profile
      }
      Slide {
        id
        status
        Pages(order_by: {pageNumber: asc}, limit: 1) {
          imageUrl
        }
      }
    }
    name
    createdAt
    updatedAt
    createdBy
  }
}
    `;

/**
 * __useRoomsSubscription__
 *
 * To run a query within a React component, call `useRoomsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRoomsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomsSubscription({
 *   variables: {
 *      roomCreatedAt: // value for 'roomCreatedAt'
 *      participantUpdatedAt: // value for 'participantUpdatedAt'
 *   },
 * });
 */
export function useRoomsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<RoomsSubscription, RoomsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RoomsSubscription, RoomsSubscriptionVariables>(RoomsDocument, options);
      }
export type RoomsSubscriptionHookResult = ReturnType<typeof useRoomsSubscription>;
export type RoomsSubscriptionResult = Apollo.SubscriptionResult<RoomsSubscription>;
export const JoinRoomMutationDocument = gql`
    mutation JoinRoomMutation($roomId: Int) {
  insert_slideshare_RoomParticipant_one(
    object: {roomId: $roomId}
    on_conflict: {constraint: RoomParticipant_pkey, update_columns: [roomId]}
  ) {
    roomId
  }
}
    `;
export type JoinRoomMutationMutationFn = Apollo.MutationFunction<JoinRoomMutationMutation, JoinRoomMutationMutationVariables>;

/**
 * __useJoinRoomMutationMutation__
 *
 * To run a mutation, you first call `useJoinRoomMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinRoomMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinRoomMutationMutation, { data, loading, error }] = useJoinRoomMutationMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useJoinRoomMutationMutation(baseOptions?: Apollo.MutationHookOptions<JoinRoomMutationMutation, JoinRoomMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinRoomMutationMutation, JoinRoomMutationMutationVariables>(JoinRoomMutationDocument, options);
      }
export type JoinRoomMutationMutationHookResult = ReturnType<typeof useJoinRoomMutationMutation>;
export type JoinRoomMutationMutationResult = Apollo.MutationResult<JoinRoomMutationMutation>;
export type JoinRoomMutationMutationOptions = Apollo.BaseMutationOptions<JoinRoomMutationMutation, JoinRoomMutationMutationVariables>;
export const UpdateRoomParticipantMutationDocument = gql`
    mutation updateRoomParticipantMutation($userId: String!, $slideId: Int!) {
  update_slideshare_RoomParticipant_by_pk(
    pk_columns: {userId: $userId}
    _set: {slideId: $slideId}
  ) {
    roomId
  }
}
    `;
export type UpdateRoomParticipantMutationMutationFn = Apollo.MutationFunction<UpdateRoomParticipantMutationMutation, UpdateRoomParticipantMutationMutationVariables>;

/**
 * __useUpdateRoomParticipantMutationMutation__
 *
 * To run a mutation, you first call `useUpdateRoomParticipantMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoomParticipantMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoomParticipantMutationMutation, { data, loading, error }] = useUpdateRoomParticipantMutationMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      slideId: // value for 'slideId'
 *   },
 * });
 */
export function useUpdateRoomParticipantMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoomParticipantMutationMutation, UpdateRoomParticipantMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoomParticipantMutationMutation, UpdateRoomParticipantMutationMutationVariables>(UpdateRoomParticipantMutationDocument, options);
      }
export type UpdateRoomParticipantMutationMutationHookResult = ReturnType<typeof useUpdateRoomParticipantMutationMutation>;
export type UpdateRoomParticipantMutationMutationResult = Apollo.MutationResult<UpdateRoomParticipantMutationMutation>;
export type UpdateRoomParticipantMutationMutationOptions = Apollo.BaseMutationOptions<UpdateRoomParticipantMutationMutation, UpdateRoomParticipantMutationMutationVariables>;
export const StartSlideRecordDocument = gql`
    mutation StartSlideRecord($audioUrl: String!, $slideId: Int!, $title: String) {
  insert_slideshare_SlideRecord_one(
    object: {slideId: $slideId, audioUrl: $audioUrl, title: $title}
  ) {
    id
  }
}
    `;
export type StartSlideRecordMutationFn = Apollo.MutationFunction<StartSlideRecordMutation, StartSlideRecordMutationVariables>;

/**
 * __useStartSlideRecordMutation__
 *
 * To run a mutation, you first call `useStartSlideRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartSlideRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startSlideRecordMutation, { data, loading, error }] = useStartSlideRecordMutation({
 *   variables: {
 *      audioUrl: // value for 'audioUrl'
 *      slideId: // value for 'slideId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useStartSlideRecordMutation(baseOptions?: Apollo.MutationHookOptions<StartSlideRecordMutation, StartSlideRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartSlideRecordMutation, StartSlideRecordMutationVariables>(StartSlideRecordDocument, options);
      }
export type StartSlideRecordMutationHookResult = ReturnType<typeof useStartSlideRecordMutation>;
export type StartSlideRecordMutationResult = Apollo.MutationResult<StartSlideRecordMutation>;
export type StartSlideRecordMutationOptions = Apollo.BaseMutationOptions<StartSlideRecordMutation, StartSlideRecordMutationVariables>;
export const AddSlideRecordPieceDocument = gql`
    mutation addSlideRecordPiece($pageId: String!, $slideRecordId: Int!, $startTime: Int!) {
  insert_slideshare_SlideRecordPiece_one(
    object: {pageId: $pageId, slideRecordId: $slideRecordId, startTime: $startTime}
  ) {
    id
  }
}
    `;
export type AddSlideRecordPieceMutationFn = Apollo.MutationFunction<AddSlideRecordPieceMutation, AddSlideRecordPieceMutationVariables>;

/**
 * __useAddSlideRecordPieceMutation__
 *
 * To run a mutation, you first call `useAddSlideRecordPieceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSlideRecordPieceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSlideRecordPieceMutation, { data, loading, error }] = useAddSlideRecordPieceMutation({
 *   variables: {
 *      pageId: // value for 'pageId'
 *      slideRecordId: // value for 'slideRecordId'
 *      startTime: // value for 'startTime'
 *   },
 * });
 */
export function useAddSlideRecordPieceMutation(baseOptions?: Apollo.MutationHookOptions<AddSlideRecordPieceMutation, AddSlideRecordPieceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSlideRecordPieceMutation, AddSlideRecordPieceMutationVariables>(AddSlideRecordPieceDocument, options);
      }
export type AddSlideRecordPieceMutationHookResult = ReturnType<typeof useAddSlideRecordPieceMutation>;
export type AddSlideRecordPieceMutationResult = Apollo.MutationResult<AddSlideRecordPieceMutation>;
export type AddSlideRecordPieceMutationOptions = Apollo.BaseMutationOptions<AddSlideRecordPieceMutation, AddSlideRecordPieceMutationVariables>;
export const UpdateDurationDocument = gql`
    mutation updateDuration($id: Int!, $duration: Int!) {
  update_slideshare_SlideRecord_by_pk(
    pk_columns: {id: $id}
    _set: {duration: $duration}
  ) {
    duration
  }
}
    `;
export type UpdateDurationMutationFn = Apollo.MutationFunction<UpdateDurationMutation, UpdateDurationMutationVariables>;

/**
 * __useUpdateDurationMutation__
 *
 * To run a mutation, you first call `useUpdateDurationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDurationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDurationMutation, { data, loading, error }] = useUpdateDurationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useUpdateDurationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDurationMutation, UpdateDurationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDurationMutation, UpdateDurationMutationVariables>(UpdateDurationDocument, options);
      }
export type UpdateDurationMutationHookResult = ReturnType<typeof useUpdateDurationMutation>;
export type UpdateDurationMutationResult = Apollo.MutationResult<UpdateDurationMutation>;
export type UpdateDurationMutationOptions = Apollo.BaseMutationOptions<UpdateDurationMutation, UpdateDurationMutationVariables>;
export const DeleteRecordDocument = gql`
    mutation deleteRecord($id: Int!) {
  delete_slideshare_SlideRecord_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteRecordMutationFn = Apollo.MutationFunction<DeleteRecordMutation, DeleteRecordMutationVariables>;

/**
 * __useDeleteRecordMutation__
 *
 * To run a mutation, you first call `useDeleteRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRecordMutation, { data, loading, error }] = useDeleteRecordMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRecordMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRecordMutation, DeleteRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRecordMutation, DeleteRecordMutationVariables>(DeleteRecordDocument, options);
      }
export type DeleteRecordMutationHookResult = ReturnType<typeof useDeleteRecordMutation>;
export type DeleteRecordMutationResult = Apollo.MutationResult<DeleteRecordMutation>;
export type DeleteRecordMutationOptions = Apollo.BaseMutationOptions<DeleteRecordMutation, DeleteRecordMutationVariables>;
export const SlideRecordDocument = gql`
    query SlideRecord($slideId: Int) {
  slideshare_SlideRecord(where: {slideId: {_eq: $slideId}}) {
    id
    audioUrl
    duration
    title
    SlideRecordPieces {
      id
      pageId
      startTime
    }
  }
}
    `;

/**
 * __useSlideRecordQuery__
 *
 * To run a query within a React component, call `useSlideRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useSlideRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSlideRecordQuery({
 *   variables: {
 *      slideId: // value for 'slideId'
 *   },
 * });
 */
export function useSlideRecordQuery(baseOptions?: Apollo.QueryHookOptions<SlideRecordQuery, SlideRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SlideRecordQuery, SlideRecordQueryVariables>(SlideRecordDocument, options);
      }
export function useSlideRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SlideRecordQuery, SlideRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SlideRecordQuery, SlideRecordQueryVariables>(SlideRecordDocument, options);
        }
export type SlideRecordQueryHookResult = ReturnType<typeof useSlideRecordQuery>;
export type SlideRecordLazyQueryHookResult = ReturnType<typeof useSlideRecordLazyQuery>;
export type SlideRecordQueryResult = Apollo.QueryResult<SlideRecordQuery, SlideRecordQueryVariables>;
export const UploadPdfDocument = gql`
    mutation UploadPdf($pdfName: String!, $slideId: Int!) {
  uploadPdf(pdfName: $pdfName, slideId: $slideId) {
    slideId
  }
}
    `;
export type UploadPdfMutationFn = Apollo.MutationFunction<UploadPdfMutation, UploadPdfMutationVariables>;

/**
 * __useUploadPdfMutation__
 *
 * To run a mutation, you first call `useUploadPdfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPdfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPdfMutation, { data, loading, error }] = useUploadPdfMutation({
 *   variables: {
 *      pdfName: // value for 'pdfName'
 *      slideId: // value for 'slideId'
 *   },
 * });
 */
export function useUploadPdfMutation(baseOptions?: Apollo.MutationHookOptions<UploadPdfMutation, UploadPdfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPdfMutation, UploadPdfMutationVariables>(UploadPdfDocument, options);
      }
export type UploadPdfMutationHookResult = ReturnType<typeof useUploadPdfMutation>;
export type UploadPdfMutationResult = Apollo.MutationResult<UploadPdfMutation>;
export type UploadPdfMutationOptions = Apollo.BaseMutationOptions<UploadPdfMutation, UploadPdfMutationVariables>;