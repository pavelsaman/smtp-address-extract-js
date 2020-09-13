import { addresses } from '../src/index';

test('Get One Address', () => {
    expect(addresses("Pavel Saman <pavelsam@centrum.cz>"))
        .toEqual(["pavelsam@centrum.cz"]);
});

test('Get Two Addresses', () => {
    const smtp_str = "Pavel Saman <pavelsam@centrum.cz>;Abc Cde <abc@email.com>";

    expect(addresses(smtp_str))
        .toEqual(["pavelsam@centrum.cz", "abc@email.com"]);
});

test('Empty', () => {
    expect(addresses("")).toEqual([]);
});

test('No Alias', () => {
    expect(addresses("<pavelsam@centrum.cz>")).toEqual(["pavelsam@centrum.cz"]);
});

test('No Address', () => {
    expect(addresses("Pavel Saman")).toEqual([""]);
});
