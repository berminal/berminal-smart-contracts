let stv = require('./stv').single_transferable_vote;

function test_input(input, seats) {
    stv(input, seats);
}

function test_stv_landslide() {
    let input = [
        {"count": 56, "ballot": ["c1", "c2", "c3"]},
        {"count": 40, "ballot": ["c2", "c3", "c1"]},
        {"count": 20, "ballot": ["c3", "c1", "c2"]}
    ];
    test_input(input, 2);
}

function test_stv_everyone_wins() {
    let input = [
        {"count": 56, "ballot": ["c1", "c2", "c3"]},
        {"count": 40, "ballot": ["c2", "c3", "c1"]},
        {"count": 20, "ballot": ["c3", "c1", "c2"]}
    ];
    test_input(input, 3);
}

function test_stv_wiki_example() {
    let input = [
        {"count": 4, "ballot": ["orange"]},
        {"count": 2, "ballot": ["pear", "orange"]},
        {"count": 8, "ballot": ["chocolate", "strawberry"]},
        {"count": 4, "ballot": ["chocolate", "sweets"]},
        {"count": 1, "ballot": ["strawberry"]},
        {"count": 1, "ballot": ["sweets"]}
    ];
    test_input(input, 3);
}

async function main() {
    // await test_stv_landslide();
    // await test_stv_everyone_wins();
    await test_stv_wiki_example();
}

main();
