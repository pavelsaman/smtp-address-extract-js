import { parse } from '../src/index';

test('Get One Object', () => {
    expect(parse("Pavel Saman <pavelsam@centrum.cz>"))
        .toEqual([{ addr: "pavelsam@centrum.cz", alias: "Pavel Saman" }]);
});

test('Get Two Objects', () => {
    const smtp_str = "Pavel Saman <pavelsam@centrum.cz>;Abc Cde <abc@email.com>";

    expect(parse(smtp_str))
        .toEqual([
            { addr: "pavelsam@centrum.cz", alias: "Pavel Saman" },
            { addr: "abc@email.com", alias: "Abc Cde" }
        ]);
});

test('Empty', () => {
    expect(parse("")).toEqual([]);
});

test('No Alias', () => {
    expect(parse("<pavelsam@centrum.cz>")).toEqual([
        { addr: "pavelsam@centrum.cz", alias: "" }
    ]);
});

test('No Address', () => {
    expect(parse("Pavel Saman")).toEqual([
        { addr: "", alias: "Pavel Saman" }
    ]);
});