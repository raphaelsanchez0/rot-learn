
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FlashCard
 * 
 */
export type FlashCard = $Result.DefaultSelection<Prisma.$FlashCardPayload>
/**
 * Model Set
 * 
 */
export type Set = $Result.DefaultSelection<Prisma.$SetPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FlashCards
 * const flashCards = await prisma.flashCard.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FlashCards
   * const flashCards = await prisma.flashCard.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.flashCard`: Exposes CRUD operations for the **FlashCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashCards
    * const flashCards = await prisma.flashCard.findMany()
    * ```
    */
  get flashCard(): Prisma.FlashCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.set`: Exposes CRUD operations for the **Set** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sets
    * const sets = await prisma.set.findMany()
    * ```
    */
  get set(): Prisma.SetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FlashCard: 'FlashCard',
    Set: 'Set'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "flashCard" | "set"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FlashCard: {
        payload: Prisma.$FlashCardPayload<ExtArgs>
        fields: Prisma.FlashCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findFirst: {
            args: Prisma.FlashCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findMany: {
            args: Prisma.FlashCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          create: {
            args: Prisma.FlashCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          createMany: {
            args: Prisma.FlashCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          delete: {
            args: Prisma.FlashCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          update: {
            args: Prisma.FlashCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          deleteMany: {
            args: Prisma.FlashCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          upsert: {
            args: Prisma.FlashCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          aggregate: {
            args: Prisma.FlashCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashCard>
          }
          groupBy: {
            args: Prisma.FlashCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashCardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashCardCountAggregateOutputType> | number
          }
        }
      }
      Set: {
        payload: Prisma.$SetPayload<ExtArgs>
        fields: Prisma.SetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findFirst: {
            args: Prisma.SetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          findMany: {
            args: Prisma.SetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          create: {
            args: Prisma.SetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          createMany: {
            args: Prisma.SetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          delete: {
            args: Prisma.SetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          update: {
            args: Prisma.SetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          deleteMany: {
            args: Prisma.SetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>[]
          }
          upsert: {
            args: Prisma.SetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetPayload>
          }
          aggregate: {
            args: Prisma.SetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSet>
          }
          groupBy: {
            args: Prisma.SetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetCountArgs<ExtArgs>
            result: $Utils.Optional<SetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    flashCard?: FlashCardOmit
    set?: SetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SetCountOutputType
   */

  export type SetCountOutputType = {
    flashcards: number
  }

  export type SetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcards?: boolean | SetCountOutputTypeCountFlashcardsArgs
  }

  // Custom InputTypes
  /**
   * SetCountOutputType without action
   */
  export type SetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetCountOutputType
     */
    select?: SetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SetCountOutputType without action
   */
  export type SetCountOutputTypeCountFlashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FlashCard
   */

  export type AggregateFlashCard = {
    _count: FlashCardCountAggregateOutputType | null
    _avg: FlashCardAvgAggregateOutputType | null
    _sum: FlashCardSumAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  export type FlashCardAvgAggregateOutputType = {
    id: number | null
    timesCorrect: number | null
    attempts: number | null
    setId: number | null
  }

  export type FlashCardSumAggregateOutputType = {
    id: number | null
    timesCorrect: number | null
    attempts: number | null
    setId: number | null
  }

  export type FlashCardMinAggregateOutputType = {
    id: number | null
    src: string | null
    term: string | null
    definition: string | null
    timesCorrect: number | null
    attempts: number | null
    setId: number | null
  }

  export type FlashCardMaxAggregateOutputType = {
    id: number | null
    src: string | null
    term: string | null
    definition: string | null
    timesCorrect: number | null
    attempts: number | null
    setId: number | null
  }

  export type FlashCardCountAggregateOutputType = {
    id: number
    src: number
    term: number
    definition: number
    timesCorrect: number
    attempts: number
    setId: number
    _all: number
  }


  export type FlashCardAvgAggregateInputType = {
    id?: true
    timesCorrect?: true
    attempts?: true
    setId?: true
  }

  export type FlashCardSumAggregateInputType = {
    id?: true
    timesCorrect?: true
    attempts?: true
    setId?: true
  }

  export type FlashCardMinAggregateInputType = {
    id?: true
    src?: true
    term?: true
    definition?: true
    timesCorrect?: true
    attempts?: true
    setId?: true
  }

  export type FlashCardMaxAggregateInputType = {
    id?: true
    src?: true
    term?: true
    definition?: true
    timesCorrect?: true
    attempts?: true
    setId?: true
  }

  export type FlashCardCountAggregateInputType = {
    id?: true
    src?: true
    term?: true
    definition?: true
    timesCorrect?: true
    attempts?: true
    setId?: true
    _all?: true
  }

  export type FlashCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCard to aggregate.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashCards
    **/
    _count?: true | FlashCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashCardMaxAggregateInputType
  }

  export type GetFlashCardAggregateType<T extends FlashCardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashCard[P]>
      : GetScalarType<T[P], AggregateFlashCard[P]>
  }




  export type FlashCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithAggregationInput | FlashCardOrderByWithAggregationInput[]
    by: FlashCardScalarFieldEnum[] | FlashCardScalarFieldEnum
    having?: FlashCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashCardCountAggregateInputType | true
    _avg?: FlashCardAvgAggregateInputType
    _sum?: FlashCardSumAggregateInputType
    _min?: FlashCardMinAggregateInputType
    _max?: FlashCardMaxAggregateInputType
  }

  export type FlashCardGroupByOutputType = {
    id: number
    src: string
    term: string
    definition: string
    timesCorrect: number
    attempts: number
    setId: number
    _count: FlashCardCountAggregateOutputType | null
    _avg: FlashCardAvgAggregateOutputType | null
    _sum: FlashCardSumAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  type GetFlashCardGroupByPayload<T extends FlashCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
        }
      >
    >


  export type FlashCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    term?: boolean
    definition?: boolean
    timesCorrect?: boolean
    attempts?: boolean
    setId?: boolean
    set?: boolean | SetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    term?: boolean
    definition?: boolean
    timesCorrect?: boolean
    attempts?: boolean
    setId?: boolean
    set?: boolean | SetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    term?: boolean
    definition?: boolean
    timesCorrect?: boolean
    attempts?: boolean
    setId?: boolean
    set?: boolean | SetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectScalar = {
    id?: boolean
    src?: boolean
    term?: boolean
    definition?: boolean
    timesCorrect?: boolean
    attempts?: boolean
    setId?: boolean
  }

  export type FlashCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "term" | "definition" | "timesCorrect" | "attempts" | "setId", ExtArgs["result"]["flashCard"]>
  export type FlashCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | SetDefaultArgs<ExtArgs>
  }
  export type FlashCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | SetDefaultArgs<ExtArgs>
  }
  export type FlashCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | SetDefaultArgs<ExtArgs>
  }

  export type $FlashCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashCard"
    objects: {
      set: Prisma.$SetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      src: string
      term: string
      definition: string
      timesCorrect: number
      attempts: number
      setId: number
    }, ExtArgs["result"]["flashCard"]>
    composites: {}
  }

  type FlashCardGetPayload<S extends boolean | null | undefined | FlashCardDefaultArgs> = $Result.GetResult<Prisma.$FlashCardPayload, S>

  type FlashCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashCardCountAggregateInputType | true
    }

  export interface FlashCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashCard'], meta: { name: 'FlashCard' } }
    /**
     * Find zero or one FlashCard that matches the filter.
     * @param {FlashCardFindUniqueArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashCardFindUniqueArgs>(args: SelectSubset<T, FlashCardFindUniqueArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashCardFindUniqueOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashCardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashCardFindFirstArgs>(args?: SelectSubset<T, FlashCardFindFirstArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashCardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashCards
     * const flashCards = await prisma.flashCard.findMany()
     * 
     * // Get first 10 FlashCards
     * const flashCards = await prisma.flashCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flashCardWithIdOnly = await prisma.flashCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlashCardFindManyArgs>(args?: SelectSubset<T, FlashCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashCard.
     * @param {FlashCardCreateArgs} args - Arguments to create a FlashCard.
     * @example
     * // Create one FlashCard
     * const FlashCard = await prisma.flashCard.create({
     *   data: {
     *     // ... data to create a FlashCard
     *   }
     * })
     * 
     */
    create<T extends FlashCardCreateArgs>(args: SelectSubset<T, FlashCardCreateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashCards.
     * @param {FlashCardCreateManyArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCard = await prisma.flashCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashCardCreateManyArgs>(args?: SelectSubset<T, FlashCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashCards and returns the data saved in the database.
     * @param {FlashCardCreateManyAndReturnArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCard = await prisma.flashCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashCards and only return the `id`
     * const flashCardWithIdOnly = await prisma.flashCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashCardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashCard.
     * @param {FlashCardDeleteArgs} args - Arguments to delete one FlashCard.
     * @example
     * // Delete one FlashCard
     * const FlashCard = await prisma.flashCard.delete({
     *   where: {
     *     // ... filter to delete one FlashCard
     *   }
     * })
     * 
     */
    delete<T extends FlashCardDeleteArgs>(args: SelectSubset<T, FlashCardDeleteArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashCard.
     * @param {FlashCardUpdateArgs} args - Arguments to update one FlashCard.
     * @example
     * // Update one FlashCard
     * const flashCard = await prisma.flashCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashCardUpdateArgs>(args: SelectSubset<T, FlashCardUpdateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashCards.
     * @param {FlashCardDeleteManyArgs} args - Arguments to filter FlashCards to delete.
     * @example
     * // Delete a few FlashCards
     * const { count } = await prisma.flashCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashCardDeleteManyArgs>(args?: SelectSubset<T, FlashCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashCards
     * const flashCard = await prisma.flashCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashCardUpdateManyArgs>(args: SelectSubset<T, FlashCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards and returns the data updated in the database.
     * @param {FlashCardUpdateManyAndReturnArgs} args - Arguments to update many FlashCards.
     * @example
     * // Update many FlashCards
     * const flashCard = await prisma.flashCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashCards and only return the `id`
     * const flashCardWithIdOnly = await prisma.flashCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlashCardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashCard.
     * @param {FlashCardUpsertArgs} args - Arguments to update or create a FlashCard.
     * @example
     * // Update or create a FlashCard
     * const flashCard = await prisma.flashCard.upsert({
     *   create: {
     *     // ... data to create a FlashCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashCard we want to update
     *   }
     * })
     */
    upsert<T extends FlashCardUpsertArgs>(args: SelectSubset<T, FlashCardUpsertArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardCountArgs} args - Arguments to filter FlashCards to count.
     * @example
     * // Count the number of FlashCards
     * const count = await prisma.flashCard.count({
     *   where: {
     *     // ... the filter for the FlashCards we want to count
     *   }
     * })
    **/
    count<T extends FlashCardCountArgs>(
      args?: Subset<T, FlashCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlashCardAggregateArgs>(args: Subset<T, FlashCardAggregateArgs>): Prisma.PrismaPromise<GetFlashCardAggregateType<T>>

    /**
     * Group by FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlashCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashCardGroupByArgs['orderBy'] }
        : { orderBy?: FlashCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlashCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashCard model
   */
  readonly fields: FlashCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    set<T extends SetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetDefaultArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlashCard model
   */
  interface FlashCardFieldRefs {
    readonly id: FieldRef<"FlashCard", 'Int'>
    readonly src: FieldRef<"FlashCard", 'String'>
    readonly term: FieldRef<"FlashCard", 'String'>
    readonly definition: FieldRef<"FlashCard", 'String'>
    readonly timesCorrect: FieldRef<"FlashCard", 'Int'>
    readonly attempts: FieldRef<"FlashCard", 'Int'>
    readonly setId: FieldRef<"FlashCard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FlashCard findUnique
   */
  export type FlashCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findUniqueOrThrow
   */
  export type FlashCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findFirst
   */
  export type FlashCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findFirstOrThrow
   */
  export type FlashCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findMany
   */
  export type FlashCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard create
   */
  export type FlashCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashCard.
     */
    data: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
  }

  /**
   * FlashCard createMany
   */
  export type FlashCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardCreateManyInput | FlashCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashCard createManyAndReturn
   */
  export type FlashCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardCreateManyInput | FlashCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCard update
   */
  export type FlashCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashCard.
     */
    data: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
    /**
     * Choose, which FlashCard to update.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard updateMany
   */
  export type FlashCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
  }

  /**
   * FlashCard updateManyAndReturn
   */
  export type FlashCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCard upsert
   */
  export type FlashCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashCard to update in case it exists.
     */
    where: FlashCardWhereUniqueInput
    /**
     * In case the FlashCard found by the `where` argument doesn't exist, create a new FlashCard with this data.
     */
    create: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
    /**
     * In case the FlashCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
  }

  /**
   * FlashCard delete
   */
  export type FlashCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter which FlashCard to delete.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard deleteMany
   */
  export type FlashCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCards to delete
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to delete.
     */
    limit?: number
  }

  /**
   * FlashCard without action
   */
  export type FlashCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
  }


  /**
   * Model Set
   */

  export type AggregateSet = {
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  export type SetAvgAggregateOutputType = {
    id: number | null
  }

  export type SetSumAggregateOutputType = {
    id: number | null
  }

  export type SetMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SetMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SetCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SetAvgAggregateInputType = {
    id?: true
  }

  export type SetSumAggregateInputType = {
    id?: true
  }

  export type SetMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SetMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SetCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Set to aggregate.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sets
    **/
    _count?: true | SetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetMaxAggregateInputType
  }

  export type GetSetAggregateType<T extends SetAggregateArgs> = {
        [P in keyof T & keyof AggregateSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSet[P]>
      : GetScalarType<T[P], AggregateSet[P]>
  }




  export type SetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetWhereInput
    orderBy?: SetOrderByWithAggregationInput | SetOrderByWithAggregationInput[]
    by: SetScalarFieldEnum[] | SetScalarFieldEnum
    having?: SetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetCountAggregateInputType | true
    _avg?: SetAvgAggregateInputType
    _sum?: SetSumAggregateInputType
    _min?: SetMinAggregateInputType
    _max?: SetMaxAggregateInputType
  }

  export type SetGroupByOutputType = {
    id: number
    name: string
    _count: SetCountAggregateOutputType | null
    _avg: SetAvgAggregateOutputType | null
    _sum: SetSumAggregateOutputType | null
    _min: SetMinAggregateOutputType | null
    _max: SetMaxAggregateOutputType | null
  }

  type GetSetGroupByPayload<T extends SetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetGroupByOutputType[P]>
            : GetScalarType<T[P], SetGroupByOutputType[P]>
        }
      >
    >


  export type SetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    flashcards?: boolean | Set$flashcardsArgs<ExtArgs>
    _count?: boolean | SetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["set"]>

  export type SetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["set"]>

  export type SetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["set"]>

  export type SetSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["set"]>
  export type SetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashcards?: boolean | Set$flashcardsArgs<ExtArgs>
    _count?: boolean | SetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Set"
    objects: {
      flashcards: Prisma.$FlashCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["set"]>
    composites: {}
  }

  type SetGetPayload<S extends boolean | null | undefined | SetDefaultArgs> = $Result.GetResult<Prisma.$SetPayload, S>

  type SetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetCountAggregateInputType | true
    }

  export interface SetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Set'], meta: { name: 'Set' } }
    /**
     * Find zero or one Set that matches the filter.
     * @param {SetFindUniqueArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetFindUniqueArgs>(args: SelectSubset<T, SetFindUniqueArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Set that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetFindUniqueOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetFindUniqueOrThrowArgs>(args: SelectSubset<T, SetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Set that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetFindFirstArgs>(args?: SelectSubset<T, SetFindFirstArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Set that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindFirstOrThrowArgs} args - Arguments to find a Set
     * @example
     * // Get one Set
     * const set = await prisma.set.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetFindFirstOrThrowArgs>(args?: SelectSubset<T, SetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sets
     * const sets = await prisma.set.findMany()
     * 
     * // Get first 10 Sets
     * const sets = await prisma.set.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setWithIdOnly = await prisma.set.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetFindManyArgs>(args?: SelectSubset<T, SetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Set.
     * @param {SetCreateArgs} args - Arguments to create a Set.
     * @example
     * // Create one Set
     * const Set = await prisma.set.create({
     *   data: {
     *     // ... data to create a Set
     *   }
     * })
     * 
     */
    create<T extends SetCreateArgs>(args: SelectSubset<T, SetCreateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sets.
     * @param {SetCreateManyArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetCreateManyArgs>(args?: SelectSubset<T, SetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sets and returns the data saved in the database.
     * @param {SetCreateManyAndReturnArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const set = await prisma.set.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sets and only return the `id`
     * const setWithIdOnly = await prisma.set.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetCreateManyAndReturnArgs>(args?: SelectSubset<T, SetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Set.
     * @param {SetDeleteArgs} args - Arguments to delete one Set.
     * @example
     * // Delete one Set
     * const Set = await prisma.set.delete({
     *   where: {
     *     // ... filter to delete one Set
     *   }
     * })
     * 
     */
    delete<T extends SetDeleteArgs>(args: SelectSubset<T, SetDeleteArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Set.
     * @param {SetUpdateArgs} args - Arguments to update one Set.
     * @example
     * // Update one Set
     * const set = await prisma.set.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetUpdateArgs>(args: SelectSubset<T, SetUpdateArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sets.
     * @param {SetDeleteManyArgs} args - Arguments to filter Sets to delete.
     * @example
     * // Delete a few Sets
     * const { count } = await prisma.set.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetDeleteManyArgs>(args?: SelectSubset<T, SetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetUpdateManyArgs>(args: SelectSubset<T, SetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets and returns the data updated in the database.
     * @param {SetUpdateManyAndReturnArgs} args - Arguments to update many Sets.
     * @example
     * // Update many Sets
     * const set = await prisma.set.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sets and only return the `id`
     * const setWithIdOnly = await prisma.set.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SetUpdateManyAndReturnArgs>(args: SelectSubset<T, SetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Set.
     * @param {SetUpsertArgs} args - Arguments to update or create a Set.
     * @example
     * // Update or create a Set
     * const set = await prisma.set.upsert({
     *   create: {
     *     // ... data to create a Set
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Set we want to update
     *   }
     * })
     */
    upsert<T extends SetUpsertArgs>(args: SelectSubset<T, SetUpsertArgs<ExtArgs>>): Prisma__SetClient<$Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetCountArgs} args - Arguments to filter Sets to count.
     * @example
     * // Count the number of Sets
     * const count = await prisma.set.count({
     *   where: {
     *     // ... the filter for the Sets we want to count
     *   }
     * })
    **/
    count<T extends SetCountArgs>(
      args?: Subset<T, SetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetAggregateArgs>(args: Subset<T, SetAggregateArgs>): Prisma.PrismaPromise<GetSetAggregateType<T>>

    /**
     * Group by Set.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetGroupByArgs['orderBy'] }
        : { orderBy?: SetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Set model
   */
  readonly fields: SetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Set.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flashcards<T extends Set$flashcardsArgs<ExtArgs> = {}>(args?: Subset<T, Set$flashcardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Set model
   */
  interface SetFieldRefs {
    readonly id: FieldRef<"Set", 'Int'>
    readonly name: FieldRef<"Set", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Set findUnique
   */
  export type SetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findUniqueOrThrow
   */
  export type SetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set findFirst
   */
  export type SetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findFirstOrThrow
   */
  export type SetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Set to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sets.
     */
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set findMany
   */
  export type SetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter, which Sets to fetch.
     */
    where?: SetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sets to fetch.
     */
    orderBy?: SetOrderByWithRelationInput | SetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sets.
     */
    cursor?: SetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sets.
     */
    skip?: number
    distinct?: SetScalarFieldEnum | SetScalarFieldEnum[]
  }

  /**
   * Set create
   */
  export type SetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to create a Set.
     */
    data: XOR<SetCreateInput, SetUncheckedCreateInput>
  }

  /**
   * Set createMany
   */
  export type SetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Set createManyAndReturn
   */
  export type SetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to create many Sets.
     */
    data: SetCreateManyInput | SetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Set update
   */
  export type SetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The data needed to update a Set.
     */
    data: XOR<SetUpdateInput, SetUncheckedUpdateInput>
    /**
     * Choose, which Set to update.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set updateMany
   */
  export type SetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
  }

  /**
   * Set updateManyAndReturn
   */
  export type SetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * The data used to update Sets.
     */
    data: XOR<SetUpdateManyMutationInput, SetUncheckedUpdateManyInput>
    /**
     * Filter which Sets to update
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to update.
     */
    limit?: number
  }

  /**
   * Set upsert
   */
  export type SetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * The filter to search for the Set to update in case it exists.
     */
    where: SetWhereUniqueInput
    /**
     * In case the Set found by the `where` argument doesn't exist, create a new Set with this data.
     */
    create: XOR<SetCreateInput, SetUncheckedCreateInput>
    /**
     * In case the Set was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetUpdateInput, SetUncheckedUpdateInput>
  }

  /**
   * Set delete
   */
  export type SetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
    /**
     * Filter which Set to delete.
     */
    where: SetWhereUniqueInput
  }

  /**
   * Set deleteMany
   */
  export type SetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sets to delete
     */
    where?: SetWhereInput
    /**
     * Limit how many Sets to delete.
     */
    limit?: number
  }

  /**
   * Set.flashcards
   */
  export type Set$flashcardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    cursor?: FlashCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * Set without action
   */
  export type SetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Set
     */
    select?: SetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Set
     */
    omit?: SetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FlashCardScalarFieldEnum: {
    id: 'id',
    src: 'src',
    term: 'term',
    definition: 'definition',
    timesCorrect: 'timesCorrect',
    attempts: 'attempts',
    setId: 'setId'
  };

  export type FlashCardScalarFieldEnum = (typeof FlashCardScalarFieldEnum)[keyof typeof FlashCardScalarFieldEnum]


  export const SetScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SetScalarFieldEnum = (typeof SetScalarFieldEnum)[keyof typeof SetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FlashCardWhereInput = {
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    id?: IntFilter<"FlashCard"> | number
    src?: StringFilter<"FlashCard"> | string
    term?: StringFilter<"FlashCard"> | string
    definition?: StringFilter<"FlashCard"> | string
    timesCorrect?: IntFilter<"FlashCard"> | number
    attempts?: IntFilter<"FlashCard"> | number
    setId?: IntFilter<"FlashCard"> | number
    set?: XOR<SetScalarRelationFilter, SetWhereInput>
  }

  export type FlashCardOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    timesCorrect?: SortOrder
    attempts?: SortOrder
    setId?: SortOrder
    set?: SetOrderByWithRelationInput
  }

  export type FlashCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    src?: StringFilter<"FlashCard"> | string
    term?: StringFilter<"FlashCard"> | string
    definition?: StringFilter<"FlashCard"> | string
    timesCorrect?: IntFilter<"FlashCard"> | number
    attempts?: IntFilter<"FlashCard"> | number
    setId?: IntFilter<"FlashCard"> | number
    set?: XOR<SetScalarRelationFilter, SetWhereInput>
  }, "id">

  export type FlashCardOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    timesCorrect?: SortOrder
    attempts?: SortOrder
    setId?: SortOrder
    _count?: FlashCardCountOrderByAggregateInput
    _avg?: FlashCardAvgOrderByAggregateInput
    _max?: FlashCardMaxOrderByAggregateInput
    _min?: FlashCardMinOrderByAggregateInput
    _sum?: FlashCardSumOrderByAggregateInput
  }

  export type FlashCardScalarWhereWithAggregatesInput = {
    AND?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    OR?: FlashCardScalarWhereWithAggregatesInput[]
    NOT?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlashCard"> | number
    src?: StringWithAggregatesFilter<"FlashCard"> | string
    term?: StringWithAggregatesFilter<"FlashCard"> | string
    definition?: StringWithAggregatesFilter<"FlashCard"> | string
    timesCorrect?: IntWithAggregatesFilter<"FlashCard"> | number
    attempts?: IntWithAggregatesFilter<"FlashCard"> | number
    setId?: IntWithAggregatesFilter<"FlashCard"> | number
  }

  export type SetWhereInput = {
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    id?: IntFilter<"Set"> | number
    name?: StringFilter<"Set"> | string
    flashcards?: FlashCardListRelationFilter
  }

  export type SetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    flashcards?: FlashCardOrderByRelationAggregateInput
  }

  export type SetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SetWhereInput | SetWhereInput[]
    OR?: SetWhereInput[]
    NOT?: SetWhereInput | SetWhereInput[]
    name?: StringFilter<"Set"> | string
    flashcards?: FlashCardListRelationFilter
  }, "id">

  export type SetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SetCountOrderByAggregateInput
    _avg?: SetAvgOrderByAggregateInput
    _max?: SetMaxOrderByAggregateInput
    _min?: SetMinOrderByAggregateInput
    _sum?: SetSumOrderByAggregateInput
  }

  export type SetScalarWhereWithAggregatesInput = {
    AND?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    OR?: SetScalarWhereWithAggregatesInput[]
    NOT?: SetScalarWhereWithAggregatesInput | SetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Set"> | number
    name?: StringWithAggregatesFilter<"Set"> | string
  }

  export type FlashCardCreateInput = {
    src: string
    term: string
    definition: string
    timesCorrect: number
    attempts: number
    set: SetCreateNestedOneWithoutFlashcardsInput
  }

  export type FlashCardUncheckedCreateInput = {
    id?: number
    src: string
    term: string
    definition: string
    timesCorrect: number
    attempts: number
    setId: number
  }

  export type FlashCardUpdateInput = {
    src?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    timesCorrect?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    set?: SetUpdateOneRequiredWithoutFlashcardsNestedInput
  }

  export type FlashCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    timesCorrect?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    setId?: IntFieldUpdateOperationsInput | number
  }

  export type FlashCardCreateManyInput = {
    id?: number
    src: string
    term: string
    definition: string
    timesCorrect: number
    attempts: number
    setId: number
  }

  export type FlashCardUpdateManyMutationInput = {
    src?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    timesCorrect?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type FlashCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    timesCorrect?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    setId?: IntFieldUpdateOperationsInput | number
  }

  export type SetCreateInput = {
    name: string
    flashcards?: FlashCardCreateNestedManyWithoutSetInput
  }

  export type SetUncheckedCreateInput = {
    id?: number
    name: string
    flashcards?: FlashCardUncheckedCreateNestedManyWithoutSetInput
  }

  export type SetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    flashcards?: FlashCardUpdateManyWithoutSetNestedInput
  }

  export type SetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    flashcards?: FlashCardUncheckedUpdateManyWithoutSetNestedInput
  }

  export type SetCreateManyInput = {
    id?: number
    name: string
  }

  export type SetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SetScalarRelationFilter = {
    is?: SetWhereInput
    isNot?: SetWhereInput
  }

  export type FlashCardCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    timesCorrect?: SortOrder
    attempts?: SortOrder
    setId?: SortOrder
  }

  export type FlashCardAvgOrderByAggregateInput = {
    id?: SortOrder
    timesCorrect?: SortOrder
    attempts?: SortOrder
    setId?: SortOrder
  }

  export type FlashCardMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    timesCorrect?: SortOrder
    attempts?: SortOrder
    setId?: SortOrder
  }

  export type FlashCardMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    term?: SortOrder
    definition?: SortOrder
    timesCorrect?: SortOrder
    attempts?: SortOrder
    setId?: SortOrder
  }

  export type FlashCardSumOrderByAggregateInput = {
    id?: SortOrder
    timesCorrect?: SortOrder
    attempts?: SortOrder
    setId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FlashCardListRelationFilter = {
    every?: FlashCardWhereInput
    some?: FlashCardWhereInput
    none?: FlashCardWhereInput
  }

  export type FlashCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SetCreateNestedOneWithoutFlashcardsInput = {
    create?: XOR<SetCreateWithoutFlashcardsInput, SetUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: SetCreateOrConnectWithoutFlashcardsInput
    connect?: SetWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SetUpdateOneRequiredWithoutFlashcardsNestedInput = {
    create?: XOR<SetCreateWithoutFlashcardsInput, SetUncheckedCreateWithoutFlashcardsInput>
    connectOrCreate?: SetCreateOrConnectWithoutFlashcardsInput
    upsert?: SetUpsertWithoutFlashcardsInput
    connect?: SetWhereUniqueInput
    update?: XOR<XOR<SetUpdateToOneWithWhereWithoutFlashcardsInput, SetUpdateWithoutFlashcardsInput>, SetUncheckedUpdateWithoutFlashcardsInput>
  }

  export type FlashCardCreateNestedManyWithoutSetInput = {
    create?: XOR<FlashCardCreateWithoutSetInput, FlashCardUncheckedCreateWithoutSetInput> | FlashCardCreateWithoutSetInput[] | FlashCardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutSetInput | FlashCardCreateOrConnectWithoutSetInput[]
    createMany?: FlashCardCreateManySetInputEnvelope
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type FlashCardUncheckedCreateNestedManyWithoutSetInput = {
    create?: XOR<FlashCardCreateWithoutSetInput, FlashCardUncheckedCreateWithoutSetInput> | FlashCardCreateWithoutSetInput[] | FlashCardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutSetInput | FlashCardCreateOrConnectWithoutSetInput[]
    createMany?: FlashCardCreateManySetInputEnvelope
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type FlashCardUpdateManyWithoutSetNestedInput = {
    create?: XOR<FlashCardCreateWithoutSetInput, FlashCardUncheckedCreateWithoutSetInput> | FlashCardCreateWithoutSetInput[] | FlashCardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutSetInput | FlashCardCreateOrConnectWithoutSetInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutSetInput | FlashCardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: FlashCardCreateManySetInputEnvelope
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutSetInput | FlashCardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutSetInput | FlashCardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type FlashCardUncheckedUpdateManyWithoutSetNestedInput = {
    create?: XOR<FlashCardCreateWithoutSetInput, FlashCardUncheckedCreateWithoutSetInput> | FlashCardCreateWithoutSetInput[] | FlashCardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutSetInput | FlashCardCreateOrConnectWithoutSetInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutSetInput | FlashCardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: FlashCardCreateManySetInputEnvelope
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutSetInput | FlashCardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutSetInput | FlashCardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SetCreateWithoutFlashcardsInput = {
    name: string
  }

  export type SetUncheckedCreateWithoutFlashcardsInput = {
    id?: number
    name: string
  }

  export type SetCreateOrConnectWithoutFlashcardsInput = {
    where: SetWhereUniqueInput
    create: XOR<SetCreateWithoutFlashcardsInput, SetUncheckedCreateWithoutFlashcardsInput>
  }

  export type SetUpsertWithoutFlashcardsInput = {
    update: XOR<SetUpdateWithoutFlashcardsInput, SetUncheckedUpdateWithoutFlashcardsInput>
    create: XOR<SetCreateWithoutFlashcardsInput, SetUncheckedCreateWithoutFlashcardsInput>
    where?: SetWhereInput
  }

  export type SetUpdateToOneWithWhereWithoutFlashcardsInput = {
    where?: SetWhereInput
    data: XOR<SetUpdateWithoutFlashcardsInput, SetUncheckedUpdateWithoutFlashcardsInput>
  }

  export type SetUpdateWithoutFlashcardsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SetUncheckedUpdateWithoutFlashcardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardCreateWithoutSetInput = {
    src: string
    term: string
    definition: string
    timesCorrect: number
    attempts: number
  }

  export type FlashCardUncheckedCreateWithoutSetInput = {
    id?: number
    src: string
    term: string
    definition: string
    timesCorrect: number
    attempts: number
  }

  export type FlashCardCreateOrConnectWithoutSetInput = {
    where: FlashCardWhereUniqueInput
    create: XOR<FlashCardCreateWithoutSetInput, FlashCardUncheckedCreateWithoutSetInput>
  }

  export type FlashCardCreateManySetInputEnvelope = {
    data: FlashCardCreateManySetInput | FlashCardCreateManySetInput[]
    skipDuplicates?: boolean
  }

  export type FlashCardUpsertWithWhereUniqueWithoutSetInput = {
    where: FlashCardWhereUniqueInput
    update: XOR<FlashCardUpdateWithoutSetInput, FlashCardUncheckedUpdateWithoutSetInput>
    create: XOR<FlashCardCreateWithoutSetInput, FlashCardUncheckedCreateWithoutSetInput>
  }

  export type FlashCardUpdateWithWhereUniqueWithoutSetInput = {
    where: FlashCardWhereUniqueInput
    data: XOR<FlashCardUpdateWithoutSetInput, FlashCardUncheckedUpdateWithoutSetInput>
  }

  export type FlashCardUpdateManyWithWhereWithoutSetInput = {
    where: FlashCardScalarWhereInput
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyWithoutSetInput>
  }

  export type FlashCardScalarWhereInput = {
    AND?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
    OR?: FlashCardScalarWhereInput[]
    NOT?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
    id?: IntFilter<"FlashCard"> | number
    src?: StringFilter<"FlashCard"> | string
    term?: StringFilter<"FlashCard"> | string
    definition?: StringFilter<"FlashCard"> | string
    timesCorrect?: IntFilter<"FlashCard"> | number
    attempts?: IntFilter<"FlashCard"> | number
    setId?: IntFilter<"FlashCard"> | number
  }

  export type FlashCardCreateManySetInput = {
    id?: number
    src: string
    term: string
    definition: string
    timesCorrect: number
    attempts: number
  }

  export type FlashCardUpdateWithoutSetInput = {
    src?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    timesCorrect?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type FlashCardUncheckedUpdateWithoutSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    timesCorrect?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }

  export type FlashCardUncheckedUpdateManyWithoutSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    timesCorrect?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}