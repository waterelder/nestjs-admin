import { Connection, EntityMetadata } from '../utils/typeormProxy';
import { EntityType } from '../types';
import DefaultAdminSite from './adminSite';
import { WidgetConstructor } from './widgets/widget.interface';
declare abstract class AdminEntity {
    private readonly adminSite;
    private readonly connection;
    abstract entity: EntityType;
    listDisplay: string[] | null;
    searchFields: string[] | null;
    resultsPerPage: number;
    widgets: {
        [propertyName: string]: WidgetConstructor;
    };
    constructor(adminSite: DefaultAdminSite, connection: Connection);
    get repository(): import("typeorm").MongoRepository<unknown>;
    get metadata(): EntityMetadata;
    get name(): string;
    getFields(form: 'add' | 'change'): string[];
    getWidgets(form: 'add' | 'change', entity?: object): any[];
    validateListConfig(): void;
    private validateDisplayFields;
    private validateSearchFields;
    protected buildSearchQueryOptions(options: any, searchParam: string): any;
    protected buildPaginationQueryOptions(options: any, page: number): any;
    getEntityList(page: number, searchString: string): Promise<{
        entities: unknown[];
        count: number;
    }>;
    save(obj: unknown): Promise<unknown>;
}
export default AdminEntity;
