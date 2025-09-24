// Toggle function for a section
function toggleSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  button.addEventListener('click', () => {
    section.classList.toggle('d-none');
  });
}

// Show/hide nested topics
function toggleNested(buttonId, topicId) {
  const button = document.getElementById(buttonId);
  const topic = document.getElementById(topicId);

  button.addEventListener('click', () => {
    topic.classList.toggle('d-none');
  });
}

// Apply to all topics
toggleSection('clickalgo', 'algorithmtopics');
toggleSection('clickds', 'DStopics');
toggleSection('clickdbms', 'dbmstopics');
toggleSection('clickcn', 'cntopics');
toggleSection('clickcompiler', 'compilertopics');

toggleNested('greedyapproach', 'greedytopic');
toggleNested('dynamicprogramming', 'dynamictopic');



