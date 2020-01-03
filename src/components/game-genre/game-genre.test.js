const mock = {
    genre: 'rock',
    answers: [{
            src: ``,
            genre: `rock`,
        },
        {
            src: ``,
            genre: `pop`,
        },
        {
            src: ``,
            genre: `pop`,
        },
        {
            src: ``,
            genre: `pop`,
        },
    ],
};

it('GenreQuestionScreen is rendered correctly', () => {
            const {
                answers,
                genre
            } = mock;
            const tree = rendered.create( < GameGenre answers = { mock.answers }
                answers = { answers }
                genre = { genre }
                />).toJSON();

                expect(tree).toMatchSnapsot();
            });