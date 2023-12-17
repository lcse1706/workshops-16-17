import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export const CompanyScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
]);

export const JobOfferScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'location',
  'salary_from',
  'salary_to',
  'is_active',
  'salary_currency',
  'created_at',
  'updated_at',
  'companyId',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);

export const NullsOrderSchema = z.enum(['first', 'last']);

export const CURRENCYSchema = z.enum(['EUR', 'USD', 'PLN']);

export type CURRENCYType = `${z.infer<typeof CURRENCYSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
});

export type Company = z.infer<typeof CompanySchema>;

/////////////////////////////////////////
// JOB OFFER SCHEMA
/////////////////////////////////////////

export const JobOfferSchema = z.object({
  salary_currency: CURRENCYSchema,
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  location: z.string().nullable(),
  salary_from: z.number().int(),
  salary_to: z.number().int(),
  is_active: z.boolean(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  companyId: z.string().nullable(),
});

export type JobOffer = z.infer<typeof JobOfferSchema>;
