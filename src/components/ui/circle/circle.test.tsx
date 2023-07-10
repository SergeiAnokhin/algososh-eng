import { Circle } from './circle';
import renderer from 'react-test-renderer';
import { ElementStates } from '../../../types/element-states';

describe('Circle Component', () => {
    it("renders without a letter", () => {
        const tree = renderer
            .create(<Circle />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders with letters", () => {
        const tree = renderer
            .create(<Circle letter="test" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders with a head", () => {
        const tree = renderer
            .create(<Circle head="1" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders with a React element as head", () => {
        const tree = renderer
            .create(<Circle head={<Circle />} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders with a tail", () => {
        const tree = renderer
            .create(<Circle tail="1" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders with a React element as tail", () => {
        const tree = renderer
            .create(<Circle tail={<Circle />} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders with an index", () => {
        const tree = renderer
            .create(<Circle index={1} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders with isSmall prop set to true", () => {
        const tree = renderer
            .create(<Circle isSmall={true} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders in default state", () => {
        const tree = renderer
            .create(<Circle state={ElementStates.Default} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders in changing state", () => {
        const tree = renderer
            .create(<Circle state={ElementStates.Changing} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders in modified state", () => {
        const tree = renderer
            .create(<Circle state={ElementStates.Modified} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});