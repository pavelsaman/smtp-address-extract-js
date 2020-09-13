import { aliases } from '../src/index';

test('Get One Alias', () => {
    expect(aliases("Pavel Saman <pavelsam@centrum.cz>"))
        .toEqual(["Pavel Saman"]);
});

test('Get Two Aliases', () => {
    const smtp_str = "Pavel Saman <pavelsam@centrum.cz>;Abc Cde <abc@email.com>";

    expect(aliases(smtp_str))
        .toEqual(["Pavel Saman", "Abc Cde"]);
});

test('Empty', () => {
    expect(aliases("")).toEqual([]);
});

test('No Alias', () => {
    expect(aliases("<pavelsam@centrum.cz>")).toEqual([""]);
});

test('No Address', () => {
    expect(aliases("Pavel Saman")).toEqual(["Pavel Saman"]);
});

test('Trim Whitespace', () => {
    expect(aliases(" Pavel Saman <pavelsam@centrum.cz>; Abc <abc@t.cz>"))
        .toEqual(["Pavel Saman", "Abc"]);
});