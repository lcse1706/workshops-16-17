import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const JobOfferScalarFieldEnumSchema = z.enum(['id','title','description','company','location','salary_from','salary_to','salary_currency','created_at','updated_at']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const CURRENCYSchema = z.enum(['EUR','USD','PLN']);

export type CURRENCYType = `${z.infer<typeof CURRENCYSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// JOB OFFER SCHEMA
/////////////////////////////////////////

export const JobOfferSchema = z.object({
  salary_currency: CURRENCYSchema,
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  company: z.string().nullable(),
  location: z.string().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type JobOffer = z.infer<typeof JobOfferSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// JOB OFFER
//------------------------------------------------------

export const JobOfferSelectSchema: z.ZodType<Prisma.JobOfferSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  company: z.boolean().optional(),
  location: z.boolean().optional(),
  salary_from: z.boolean().optional(),
  salary_to: z.boolean().optional(),
  salary_currency: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const JobOfferWhereInputSchema: z.ZodType<Prisma.JobOfferWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobOfferWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salary_from: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  salary_to: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  salary_currency: z.union([ z.lazy(() => EnumCURRENCYFilterSchema),z.lazy(() => CURRENCYSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const JobOfferOrderByWithRelationInputSchema: z.ZodType<Prisma.JobOfferOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  company: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferWhereUniqueInputSchema: z.ZodType<Prisma.JobOfferWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobOfferWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobOfferWhereInputSchema),z.lazy(() => JobOfferWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salary_from: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  salary_to: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  salary_currency: z.union([ z.lazy(() => EnumCURRENCYFilterSchema),z.lazy(() => CURRENCYSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const JobOfferOrderByWithAggregationInputSchema: z.ZodType<Prisma.JobOfferOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  company: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => JobOfferCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => JobOfferAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JobOfferMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JobOfferMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => JobOfferSumOrderByAggregateInputSchema).optional()
}).strict();

export const JobOfferScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JobOfferScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema),z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema),z.lazy(() => JobOfferScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  salary_from: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  salary_to: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  salary_currency: z.union([ z.lazy(() => EnumCURRENCYWithAggregatesFilterSchema),z.lazy(() => CURRENCYSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const JobOfferCreateInputSchema: z.ZodType<Prisma.JobOfferCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  company: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  salary_currency: z.lazy(() => CURRENCYSchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const JobOfferUncheckedCreateInputSchema: z.ZodType<Prisma.JobOfferUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  company: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  salary_currency: z.lazy(() => CURRENCYSchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const JobOfferUpdateInputSchema: z.ZodType<Prisma.JobOfferUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => EnumCURRENCYFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferUncheckedUpdateInputSchema: z.ZodType<Prisma.JobOfferUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => EnumCURRENCYFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferCreateManyInputSchema: z.ZodType<Prisma.JobOfferCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  description: z.string(),
  company: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  salary_currency: z.lazy(() => CURRENCYSchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export const JobOfferUpdateManyMutationInputSchema: z.ZodType<Prisma.JobOfferUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => EnumCURRENCYFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobOfferUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JobOfferUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  salary_from: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_to: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  salary_currency: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => EnumCURRENCYFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const EnumCURRENCYFilterSchema: z.ZodType<Prisma.EnumCURRENCYFilter> = z.object({
  equals: z.lazy(() => CURRENCYSchema).optional(),
  in: z.lazy(() => CURRENCYSchema).array().optional(),
  notIn: z.lazy(() => CURRENCYSchema).array().optional(),
  not: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => NestedEnumCURRENCYFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const JobOfferCountOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferAvgOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferAvgOrderByAggregateInput> = z.object({
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferMinOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional(),
  salary_currency: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobOfferSumOrderByAggregateInputSchema: z.ZodType<Prisma.JobOfferSumOrderByAggregateInput> = z.object({
  salary_from: z.lazy(() => SortOrderSchema).optional(),
  salary_to: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const EnumCURRENCYWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCURRENCYWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CURRENCYSchema).optional(),
  in: z.lazy(() => CURRENCYSchema).array().optional(),
  notIn: z.lazy(() => CURRENCYSchema).array().optional(),
  not: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => NestedEnumCURRENCYWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCURRENCYFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCURRENCYFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const EnumCURRENCYFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCURRENCYFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CURRENCYSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCURRENCYFilterSchema: z.ZodType<Prisma.NestedEnumCURRENCYFilter> = z.object({
  equals: z.lazy(() => CURRENCYSchema).optional(),
  in: z.lazy(() => CURRENCYSchema).array().optional(),
  notIn: z.lazy(() => CURRENCYSchema).array().optional(),
  not: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => NestedEnumCURRENCYFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCURRENCYWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCURRENCYWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CURRENCYSchema).optional(),
  in: z.lazy(() => CURRENCYSchema).array().optional(),
  notIn: z.lazy(() => CURRENCYSchema).array().optional(),
  not: z.union([ z.lazy(() => CURRENCYSchema),z.lazy(() => NestedEnumCURRENCYWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCURRENCYFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCURRENCYFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const JobOfferFindFirstArgsSchema: z.ZodType<Prisma.JobOfferFindFirstArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobOfferScalarFieldEnumSchema,JobOfferScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobOfferFindFirstOrThrowArgsSchema: z.ZodType<Prisma.JobOfferFindFirstOrThrowArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobOfferScalarFieldEnumSchema,JobOfferScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobOfferFindManyArgsSchema: z.ZodType<Prisma.JobOfferFindManyArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobOfferScalarFieldEnumSchema,JobOfferScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobOfferAggregateArgsSchema: z.ZodType<Prisma.JobOfferAggregateArgs> = z.object({
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithRelationInputSchema.array(),JobOfferOrderByWithRelationInputSchema ]).optional(),
  cursor: JobOfferWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobOfferGroupByArgsSchema: z.ZodType<Prisma.JobOfferGroupByArgs> = z.object({
  where: JobOfferWhereInputSchema.optional(),
  orderBy: z.union([ JobOfferOrderByWithAggregationInputSchema.array(),JobOfferOrderByWithAggregationInputSchema ]).optional(),
  by: JobOfferScalarFieldEnumSchema.array(),
  having: JobOfferScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobOfferFindUniqueArgsSchema: z.ZodType<Prisma.JobOfferFindUniqueArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const JobOfferFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.JobOfferFindUniqueOrThrowArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const JobOfferCreateArgsSchema: z.ZodType<Prisma.JobOfferCreateArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  data: z.union([ JobOfferCreateInputSchema,JobOfferUncheckedCreateInputSchema ]),
}).strict() ;

export const JobOfferUpsertArgsSchema: z.ZodType<Prisma.JobOfferUpsertArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
  create: z.union([ JobOfferCreateInputSchema,JobOfferUncheckedCreateInputSchema ]),
  update: z.union([ JobOfferUpdateInputSchema,JobOfferUncheckedUpdateInputSchema ]),
}).strict() ;

export const JobOfferCreateManyArgsSchema: z.ZodType<Prisma.JobOfferCreateManyArgs> = z.object({
  data: z.union([ JobOfferCreateManyInputSchema,JobOfferCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const JobOfferDeleteArgsSchema: z.ZodType<Prisma.JobOfferDeleteArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const JobOfferUpdateArgsSchema: z.ZodType<Prisma.JobOfferUpdateArgs> = z.object({
  select: JobOfferSelectSchema.optional(),
  data: z.union([ JobOfferUpdateInputSchema,JobOfferUncheckedUpdateInputSchema ]),
  where: JobOfferWhereUniqueInputSchema,
}).strict() ;

export const JobOfferUpdateManyArgsSchema: z.ZodType<Prisma.JobOfferUpdateManyArgs> = z.object({
  data: z.union([ JobOfferUpdateManyMutationInputSchema,JobOfferUncheckedUpdateManyInputSchema ]),
  where: JobOfferWhereInputSchema.optional(),
}).strict() ;

export const JobOfferDeleteManyArgsSchema: z.ZodType<Prisma.JobOfferDeleteManyArgs> = z.object({
  where: JobOfferWhereInputSchema.optional(),
}).strict() ;