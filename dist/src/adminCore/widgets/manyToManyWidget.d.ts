import { Widget } from './widget.interface';
import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';
import { DefaultAdminSite } from 'src';
export default class ManyToManyWidget implements Widget {
    readonly relation: RelationMetadata;
    readonly adminSite: DefaultAdminSite;
    readonly entity?: object;
    template: string;
    constructor(relation: RelationMetadata, adminSite: DefaultAdminSite, entity?: object);
    getLabel(): string;
    isRequired(): boolean;
    getValue(): any;
}
