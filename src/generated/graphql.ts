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
  /** delete data from the table: "slideshare.Test" */
  delete_slideshare_Test?: Maybe<Slideshare_Test_Mutation_Response>;
  /** delete single row from the table: "slideshare.Test" */
  delete_slideshare_Test_by_pk?: Maybe<Slideshare_Test>;
  /** insert data into the table: "Note" */
  insert_Note?: Maybe<Note_Mutation_Response>;
  /** insert a single row into the table: "Note" */
  insert_Note_one?: Maybe<Note>;
  /** insert data into the table: "slideshare.Test" */
  insert_slideshare_Test?: Maybe<Slideshare_Test_Mutation_Response>;
  /** insert a single row into the table: "slideshare.Test" */
  insert_slideshare_Test_one?: Maybe<Slideshare_Test>;
  /** update data of the table: "Note" */
  update_Note?: Maybe<Note_Mutation_Response>;
  /** update single row of the table: "Note" */
  update_Note_by_pk?: Maybe<Note>;
  /** update data of the table: "slideshare.Test" */
  update_slideshare_Test?: Maybe<Slideshare_Test_Mutation_Response>;
  /** update single row of the table: "slideshare.Test" */
  update_slideshare_Test_by_pk?: Maybe<Slideshare_Test>;
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
export type Mutation_RootDelete_Slideshare_TestArgs = {
  where: Slideshare_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slideshare_Test_By_PkArgs = {
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
export type Mutation_RootInsert_Slideshare_TestArgs = {
  objects: Array<Slideshare_Test_Insert_Input>;
  on_conflict?: Maybe<Slideshare_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slideshare_Test_OneArgs = {
  object: Slideshare_Test_Insert_Input;
  on_conflict?: Maybe<Slideshare_Test_On_Conflict>;
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
export type Mutation_RootUpdate_Slideshare_TestArgs = {
  _inc?: Maybe<Slideshare_Test_Inc_Input>;
  _set?: Maybe<Slideshare_Test_Set_Input>;
  where: Slideshare_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slideshare_Test_By_PkArgs = {
  _inc?: Maybe<Slideshare_Test_Inc_Input>;
  _set?: Maybe<Slideshare_Test_Set_Input>;
  pk_columns: Slideshare_Test_Pk_Columns_Input;
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
  /** fetch data from the table: "slideshare.Test" */
  slideshare_Test: Array<Slideshare_Test>;
  /** fetch data from the table: "slideshare.Test" using primary key columns */
  slideshare_Test_by_pk?: Maybe<Slideshare_Test>;
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


export type Query_RootSlideshare_TestArgs = {
  distinct_on?: Maybe<Array<Slideshare_Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Test_Order_By>>;
  where?: Maybe<Slideshare_Test_Bool_Exp>;
};


export type Query_RootSlideshare_Test_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "slideshare.Test" */
export type Slideshare_Test = {
  __typename?: 'slideshare_Test';
  id: Scalars['Int'];
  test?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

/** Boolean expression to filter rows from the table "slideshare.Test". All fields are combined with a logical 'AND'. */
export type Slideshare_Test_Bool_Exp = {
  _and?: Maybe<Array<Slideshare_Test_Bool_Exp>>;
  _not?: Maybe<Slideshare_Test_Bool_Exp>;
  _or?: Maybe<Array<Slideshare_Test_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  test?: Maybe<String_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "slideshare.Test" */
export enum Slideshare_Test_Constraint {
  /** unique or primary key constraint */
  TestPkey = 'Test_pkey'
}

/** input type for incrementing numeric columns in table "slideshare.Test" */
export type Slideshare_Test_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "slideshare.Test" */
export type Slideshare_Test_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  test?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "slideshare.Test" */
export type Slideshare_Test_Mutation_Response = {
  __typename?: 'slideshare_Test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slideshare_Test>;
};

/** on conflict condition type for table "slideshare.Test" */
export type Slideshare_Test_On_Conflict = {
  constraint: Slideshare_Test_Constraint;
  update_columns?: Array<Slideshare_Test_Update_Column>;
  where?: Maybe<Slideshare_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "slideshare.Test". */
export type Slideshare_Test_Order_By = {
  id?: Maybe<Order_By>;
  test?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

/** primary key columns input for table: slideshare_Test */
export type Slideshare_Test_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "slideshare.Test" */
export enum Slideshare_Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Test = 'test',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "slideshare.Test" */
export type Slideshare_Test_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  test?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** update columns of table "slideshare.Test" */
export enum Slideshare_Test_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Test = 'test',
  /** column name */
  Text = 'text'
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
  /** fetch data from the table: "slideshare.Test" */
  slideshare_Test: Array<Slideshare_Test>;
  /** fetch data from the table: "slideshare.Test" using primary key columns */
  slideshare_Test_by_pk?: Maybe<Slideshare_Test>;
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


export type Subscription_RootSlideshare_TestArgs = {
  distinct_on?: Maybe<Array<Slideshare_Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slideshare_Test_Order_By>>;
  where?: Maybe<Slideshare_Test_Bool_Exp>;
};


export type Subscription_RootSlideshare_Test_By_PkArgs = {
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

export type CreateTestMutationVariables = Exact<{
  test: Scalars['String'];
}>;


export type CreateTestMutation = { __typename?: 'mutation_root', insert_slideshare_Test_one?: { __typename?: 'slideshare_Test', id: number, text: string, test?: string | null | undefined } | null | undefined };


export const CreateTestDocument = gql`
    mutation CreateTest($test: String!) {
  insert_slideshare_Test_one(object: {test: $test}) {
    id
    text
    test
  }
}
    `;
export type CreateTestMutationFn = Apollo.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;

/**
 * __useCreateTestMutation__
 *
 * To run a mutation, you first call `useCreateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreateTestMutation({
 *   variables: {
 *      test: // value for 'test'
 *   },
 * });
 */
export function useCreateTestMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestMutation, CreateTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTestMutation, CreateTestMutationVariables>(CreateTestDocument, options);
      }
export type CreateTestMutationHookResult = ReturnType<typeof useCreateTestMutation>;
export type CreateTestMutationResult = Apollo.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = Apollo.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;