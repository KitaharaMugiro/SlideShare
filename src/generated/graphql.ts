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
  keys?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  /** delete data from the table: "Note" */
  delete_Note?: Maybe<Note_Mutation_Response>;
  /** delete single row from the table: "Note" */
  delete_Note_by_pk?: Maybe<Note>;
  /** delete data from the table: "slideshare.Page" */
  delete_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** delete single row from the table: "slideshare.Page" */
  delete_slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** delete data from the table: "slideshare.Slide" */
  delete_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** delete single row from the table: "slideshare.Slide" */
  delete_slideshare_Slide_by_pk?: Maybe<Slideshare_Slide>;
  /** insert data into the table: "Note" */
  insert_Note?: Maybe<Note_Mutation_Response>;
  /** insert a single row into the table: "Note" */
  insert_Note_one?: Maybe<Note>;
  /** insert data into the table: "slideshare.Page" */
  insert_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Page" */
  insert_slideshare_Page_one?: Maybe<Slideshare_Page>;
  /** insert data into the table: "slideshare.Slide" */
  insert_slideshare_Slide?: Maybe<Slideshare_Slide_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Slide" */
  insert_slideshare_Slide_one?: Maybe<Slideshare_Slide>;
  /** update data of the table: "Note" */
  update_Note?: Maybe<Note_Mutation_Response>;
  /** update single row of the table: "Note" */
  update_Note_by_pk?: Maybe<Note>;
  /** update data of the table: "slideshare.Page" */
  update_slideshare_Page?: Maybe<Slideshare_Page_Mutation_Response>;
  /** update single row of the table: "slideshare.Page" */
  update_slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** PDFをPNGに変えてPageにする */
  uploadPdf?: Maybe<UploadPdfOutput>;
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
export type Mutation_RootDelete_Slideshare_PageArgs = {
  where: Slideshare_Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Page_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_SlideArgs = {
  where: Slideshare_Slide_Bool_Exp;
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
export type Mutation_RootInsert_Slideshare_SlideArgs = {
  objects: Array<Slideshare_Slide_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Slide_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Slide_OneArgs = {
  object: Slideshare_Slide_Insert_Input;
  on_conflict?: Maybe<Slideshare_Slide_On_Conflict>;
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
export type Mutation_RootUploadPdfArgs = {
  pdfName: Scalars['String'];
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
  /** fetch data from the table: "slideshare.Page" */
  slideshare_Page: Array<Slideshare_Page>;
  /** fetch data from the table: "slideshare.PageType" */
  slideshare_PageType: Array<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.PageType" using primary key columns */
  slideshare_PageType_by_pk?: Maybe<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.Page" using primary key columns */
  slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** fetch data from the table: "slideshare.Slide" */
  slideshare_Slide: Array<Slideshare_Slide>;
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


export type Query_RootSlideshare_SlideArgs = {
  distinct_on?: Maybe<Array<Slideshare_Slide_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Slide_Order_By>>;
  where?: Maybe<Slideshare_Slide_Bool_Exp>;
};


export type Query_RootSlideshare_Slide_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "slideshare.Page" */
export type Slideshare_Page = {
  __typename?: 'slideshare_Page';
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  pageNumber: Scalars['Int'];
  slideId: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  type: Slideshare_PageType_Enum;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  videoUrl?: Maybe<Scalars['String']>;
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
  Image = 'image',
  Temp = 'temp',
  Text = 'text',
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
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  slideId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
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

/** on conflict condition type for table "slideshare.Page" */
export type Slideshare_Page_On_Conflict = {
  constraint: Slideshare_Page_Constraint;
  update_columns?: Array<Slideshare_Page_Update_Column>;
  where?: Maybe<Slideshare_Page_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Page". */
export type Slideshare_Page_Order_By = {
  createdAt?: Maybe<Order_By>;
  createdBy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  isVisible?: Maybe<Order_By>;
  pageNumber?: Maybe<Order_By>;
  slideId?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
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

/** columns and relationships of "slideshare.Slide" */
export type Slideshare_Slide = {
  __typename?: 'slideshare_Slide';
  /** An array relationship */
  Pages: Array<Slideshare_Page>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  createdBy: Scalars['String'];
  id: Scalars['Int'];
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

/** Boolean expression to filter rows from the table "slideshare.Slide". All fields are combined with a logical 'AND'. */
export type Slideshare_Slide_Bool_Exp = {
  Pages?: Maybe<Slideshare_Page_Bool_Exp>;
  _and?: Maybe<Array<Slideshare_Slide_Bool_Exp>>;
  _not?: Maybe<Slideshare_Slide_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Slide_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  createdBy?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
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
};

/** response of any mutation on the table "slideshare.Slide" */
export type Slideshare_Slide_Mutation_Response = {
  __typename?: 'slideshare_Slide_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Slide>;
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
  updatedAt?: Maybe<Order_By>;
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
  UpdatedAt = 'updatedAt'
}

/** placeholder for update columns of table "slideshare.Slide" (current role has no relevant permissions) */
export enum Slideshare_Slide_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
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
  /** fetch data from the table: "slideshare.Page" */
  slideshare_Page: Array<Slideshare_Page>;
  /** fetch data from the table: "slideshare.PageType" */
  slideshare_PageType: Array<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.PageType" using primary key columns */
  slideshare_PageType_by_pk?: Maybe<Slideshare_PageType>;
  /** fetch data from the table: "slideshare.Page" using primary key columns */
  slideshare_Page_by_pk?: Maybe<Slideshare_Page>;
  /** fetch data from the table: "slideshare.Slide" */
  slideshare_Slide: Array<Slideshare_Slide>;
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


export type Subscription_RootSlideshare_SlideArgs = {
  distinct_on?: Maybe<Array<Slideshare_Slide_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Slide_Order_By>>;
  where?: Maybe<Slideshare_Slide_Bool_Exp>;
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

export type CreateSlideMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateSlideMutation = { __typename?: 'mutation_root', insert_slideshare_Slide_one?: { __typename?: 'slideshare_Slide', id: number, Pages: Array<{ __typename?: 'slideshare_Page', id: string, type: Slideshare_PageType_Enum, text?: string | null | undefined, pageNumber: number, imageUrl?: string | null | undefined, videoUrl?: string | null | undefined, createdAt?: any | null | undefined }> } | null | undefined };

export type QuerySlideQueryVariables = Exact<{
  slideId: Scalars['Int'];
}>;


export type QuerySlideQuery = { __typename?: 'query_root', slideshare_Slide_by_pk?: { __typename?: 'slideshare_Slide', id: number, createdBy: string, Pages: Array<{ __typename?: 'slideshare_Page', id: string, type: Slideshare_PageType_Enum, text?: string | null | undefined, pageNumber: number, imageUrl?: string | null | undefined, videoUrl?: string | null | undefined, createdAt?: any | null | undefined, updatedAt?: any | null | undefined }> } | null | undefined };

export type UploadPdfMutationVariables = Exact<{
  pdfName: Scalars['String'];
}>;


export type UploadPdfMutation = { __typename?: 'mutation_root', uploadPdf?: { __typename?: 'UploadPdfOutput', keys?: Array<string | null | undefined> | null | undefined } | null | undefined };


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
export const CreateSlideDocument = gql`
    mutation createSlide {
  insert_slideshare_Slide_one(object: {}) {
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
export const QuerySlideDocument = gql`
    query querySlide($slideId: Int!) {
  slideshare_Slide_by_pk(id: $slideId) {
    id
    createdBy
    Pages {
      id
      type
      text
      pageNumber
      imageUrl
      videoUrl
      createdAt
      updatedAt
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
export const UploadPdfDocument = gql`
    mutation UploadPdf($pdfName: String!) {
  uploadPdf(pdfName: $pdfName) {
    keys
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