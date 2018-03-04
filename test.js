import '../test_helper';
import { Chat, Chats, ChatPresenter } from '../../backbone/models/chat';
import * as ChatFixtures from '../fixtures/chats';
const { chat: getChat, chats: getChats } = ChatFixtures;

describe('`Chat` model', () => {
  const attributes = getChat();
  const model = new Chat({ attributes });

  it('should return a Backbone model', () => {
    const actual = model instanceof Backbone.Model;
    const expected = true;
    expect(actual).toBe(expected);
  });

  describe('`url`', () => {
    it('should return the correct url', () => {
      const actual = model.url;
      const expected = '/kandy/persist';
      expect(actual).toBe(expected);
    });
  });

  describe('`toJSON`', () => {
    it('should return an object with a `chat_line` and { `attributes` } key-value pair', () => {
      const actual = model.toJSON();
      const expected = {
        chat_line: { attributes }
      };
      expect(actual).toEqual(expected);
    });
  });
});

describe('`Chats`', () => {
  const options = { chat_id: 1 };
  const collection = new Chats([], options);

  it('should return a Backbone collection', () => {
    const actual = collection instanceof Backbone.Collection;
    const expected = true;
    expect(actual).toBe(expected);
  });

  describe('`initialize`', () => {
    it('should have correct default `id` prop', () => {
      const { id: actual } = collection;
      const { chat_id: expected } = options;
      expect(actual).toEqual(expected);
    });
  });

  describe('`url`', () => {
    it('should return the correct url', () => {
      const actual = collection.url();
      const expected = `/kandy/load_chat?list_id=${collection.id}`;
      expect(actual).toBe(expected);
    });
  });

  describe('`parse`', () => {
    const chats = getChats();
    const response = { chats };
    it('should return `chats` prop', () => {
      const actual = collection.parse(response);
      const expected = chats;
      expect(actual).toEqual(expected);
    });
  });
});

// TODO
// describe("`ChatPresenter`", () => {
//  const attributes = getChat();
//  const model = new Chat(attributes);

//  //fix presented.model line 41
//  app.peers = new Chats(model, { chat_id: 1 });
//  const x = model.get("member");
//  const actual = ChatPresenter(model);
//  console.log(actual);
// });
