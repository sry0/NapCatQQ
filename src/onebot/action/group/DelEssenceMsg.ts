import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { MessageUnique } from '@/common/message-unique';

const SchemaData = {
    type: 'object',
    properties: {
        message_id: { type: ['number', 'string'] },
    },
    required: ['message_id'],
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export default class DelEssenceMsg extends BaseAction<Payload, any> {
    actionName = ActionName.DelEssenceMsg;
    payloadSchema = SchemaData;

    async _handle(payload: Payload): Promise<any> {
        const NTQQGroupApi = this.core.apis.GroupApi;
        const msg = MessageUnique.getMsgIdAndPeerByShortId(+payload.message_id);
        if (!msg) throw new Error('msg not found');
        return await NTQQGroupApi.removeGroupEssence(
            msg.Peer.peerUid,
            msg.MsgId,
        );
    }
}
