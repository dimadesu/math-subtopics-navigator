# Mathspace Frontend Test Task 2017

## Instructions

- Use this bootstrapped [Create React App](https://github.com/facebookincubator/create-react-app) project to flesh-out the interface in this mockup:

  ![Reference Mockup](assets/mockup.png)

- You don't need to actually implement the hamburger menu, nor content/views to correspond with the two other tab-bar buttons at the bottom.

- Strict pixel perfection is not necessary.

- Aim for compatibility with one browser of your choice.

- You may have questions as you interpret and implement the mockup, use your best judgment – we're interested in understanding your decisions.

- Recommended time limit is 4 hours. If you have time left, consider the stretch requirements you feel comfortable with.

- When you have finished, upload your task to Google Drive. _Please do not publish your work to a public repository or hosting service._

### Requirements

- [x] **Basic layout** – Implement the HTML/CSS layout as displayed in the mockup.
- [ ] **Data-driven content** – Integrate the provided data to dynamically generate the content.
- [ ] **Navigation** – Implement page behaviour, such that when a numbered circle is clicked, the corresponding card appears in the white space below. The numbered circle should also appear selected.
- [ ] **Complete subtopic behaviour** – When the "Let's Go" button is clicked, the completed state of that subtopic should be set true, and this should be reflected in the circle navigation and the card.

### Stretch Requirements

- [ ] **Animations** – Implement a transition when a new card is selected.
- [ ] **Basic responsive layout** – Implement responsive styles/behaviours to suit larger screens. You may decide how the layout makes use of the increased space.
- [ ] **Advanced responsive behaviour** – When the row of circles doesn't fit the available width, the left/right arrows should slide the row so that more circles are revealed.

## Assets

You'll find image assets in the `assets` folder. The mockup uses Helvetica for the font face and the following colours:

- Pink: `#BA77FF`
- Blue: `#8C88FF`
- Green: `#50D2C2`
- Purple: `#6563A4`
- White: `#FFFFFF`

## Data

```js
const topic = {
  title: 'Geometry',
};

const subtopics = [
  { id: 1, title: 'Triangles', completed: true },
  { id: 2, title: 'Angle Sum', completed: true },
  { id: 3, title: 'Similar Triangles', completed: true },
  { id: 4, title: 'Congruence', completed: false },
  { id: 5, title: 'Enlargements', completed: false },
  { id: 6, title: 'Parallel Lines', completed: false },
  { id: 7, title: 'Pythagoras Theorem', completed: false },
  { id: 8, title: 'Revision', completed: false },
  { id: 9, title: 'Topic Test', completed: false },
];
```
