// Image URLs sourced from https://fluffy-curate-art-vault.base44.app
const BASE = "https://media.base44.com/images/public/69e03c43dec84f6afff54d32";

export const artImages = {
  // Hero / featured
  energyOfUniverse: `${BASE}/754f96938_EnergyOfTheUniverse.jpg`,
  heartOfObangsaek: `${BASE}/a8a8675b2_HeartOfObangsaek.jpg`,
  fieldsOfBeing: `${BASE}/e9ddcefb1_64.jpg`,
  aLineTowardYou: `${BASE}/4e8b36b3a_ALineTowardYou.jpg`,
  eyeOfTheAbyss: `${BASE}/72b4cb174_EyeOfTheAbyss.jpg`,
  birthOfNewHumanity: `${BASE}/fa435309c_BirthOfANewHumanity.jpg`,
  orbitOfExistence: `${BASE}/66eb79512_OrbitOfExistence.jpg`,
  goldenGaze: `${BASE}/15d8cfc37_GoldenGaze.jpg`,
  dreamOfHope: `${BASE}/22e37dce9_DreamOfHope.jpg`,
  theKiss: `${BASE}/4050a49c1_TheKiss.jpg`,
  sourceOfLife: `${BASE}/b5d22a79e_SourceOfLife.jpg`,
  cycleOfEnergy: `${BASE}/b786d11a7_CycleOfEnergy.jpg`,
  womanWithTheMoon: `${BASE}/e0709cd30_WomanWithTheMoon.jpg`,
  vibrationOfCreation: `${BASE}/948296b00_VibrationOfcreation.jpg`,
  towardTheLight: `${BASE}/9bf8fc742_TowardTheLight.jpg`,
  bookCover: `${BASE}/6b76f7494_100Miracle.jpg`,
};

export type Artwork = {
  title: string;
  img: string;
};

export type Collection = {
  num: string;
  slug: string;
  title: string;
  caption: string;
  body: string;
  works: Artwork[];
};

export const collections: Collection[] = [
  {
    num: "I",
    slug: "fields-of-being",
    title: "Fields of Being",
    caption: "Infinite texture, infinite depth",
    body: "Meditative field paintings rendered mark by micro-mark. Each canvas breathes as a living organism — pure colour, pure presence.",
    works: [
      { title: "Field Study 64", img: `${BASE}/e9ddcefb1_64.jpg` },
      { title: "Field Study 67", img: `${BASE}/a9fdf38bc_67.jpg` },
      { title: "Field Study 70", img: `${BASE}/9720e2e68_70.jpg` },
      { title: "Burning Silence", img: `${BASE}/5aa6dac2e_BurningSilence.jpg` },
      { title: "Silence Of The Soul", img: `${BASE}/c6c471729_SilenceOfTheSoul.jpg` },
      { title: "The Depth Of Emptiness", img: `${BASE}/edd8b7aec_TheDepthOfEmptiness.jpg` },
    ],
  },
  {
    num: "II",
    slug: "sacred-geometry",
    title: "Sacred Geometry",
    caption: "Form as meaning, silence as speech",
    body: "Stripped to essence — triangles, circles, grids. Each geometric form carries the weight of all that cannot be said.",
    works: [
      { title: "A Line Toward You", img: `${BASE}/4e8b36b3a_ALineTowardYou.jpg` },
      { title: "A Line Toward You 1", img: `${BASE}/48d035a60_ALineTowardYou1.jpg` },
      { title: "Coordinates Of Emotion", img: `${BASE}/40ab86a4e_CoordinatesOfEmotion.jpg` },
      { title: "Between The Barcode And Me", img: `${BASE}/680d884d8_BetweenTheBarcodeAndMe.jpg` },
      { title: "Nodal Point Of Aether", img: `${BASE}/efc2b0a26_NodalPointOfAether.jpg` },
      { title: "Wounded Sign", img: `${BASE}/b141bacde_WoundedSign.jpg` },
      { title: "Perception In Silence", img: `${BASE}/7450c2444_PerceptionInSilence.jpg` },
    ],
  },
  {
    num: "III",
    slug: "energy-and-cosmos",
    title: "Energy & Cosmos",
    caption: "Life force made visible",
    body: "Orbiting spheres, spiraling energies, and solar bursts mirror the unseen structures within. These works map emotional gravity and luminous pull.",
    works: [
      { title: "Energy Of The Universe", img: `${BASE}/754f96938_EnergyOfTheUniverse.jpg` },
      { title: "Epicenter Of Creation", img: `${BASE}/9d6dea4d3_EpicenterOfCreation.jpg` },
      { title: "Expansion Of Energy 1", img: `${BASE}/ce4141be4_ExpansionOfEnergy1.jpg` },
      { title: "Expansion Of Energy 2", img: `${BASE}/f11a40ea9_ExpansionOfEnergy2.jpg` },
      { title: "Expansion Of Energy 3", img: `${BASE}/037aceeb1_ExpansionOfEnergy3.jpg` },
      { title: "Cycle Of Energy", img: `${BASE}/b786d11a7_CycleOfEnergy.jpg` },
      { title: "Vibration Of Creation", img: `${BASE}/948296b00_VibrationOfcreation.jpg` },
      { title: "Source Of Life", img: `${BASE}/b5d22a79e_SourceOfLife.jpg` },
      { title: "Orbit Of Existence", img: `${BASE}/66eb79512_OrbitOfExistence.jpg` },
    ],
  },
  {
    num: "IV",
    slug: "the-dreaming-eye",
    title: "The Dreaming Eye",
    caption: "To witness and to be witnessed",
    body: "Eyes float through colour as living organisms. These works ask: what does it mean to truly see — and to be seen?",
    works: [
      { title: "Eye Of The Abyss", img: `${BASE}/72b4cb174_EyeOfTheAbyss.jpg` },
      { title: "Golden Gaze", img: `${BASE}/15d8cfc37_GoldenGaze.jpg` },
      { title: "Invisible Gaze", img: `${BASE}/aeb709d55_InvisibleGaze.jpg` },
      { title: "The Gaze", img: `${BASE}/61018c9a2_TheGaze.jpg` },
      { title: "The Gaze Of Silence", img: `${BASE}/73e813dd4_TheGazeOfSilence.jpg` },
      { title: "The Grain Of Connection", img: `${BASE}/0345c47de_TheGrainOfConnection.jpg` },
    ],
  },
  {
    num: "V",
    slug: "the-human-form",
    title: "The Human Form",
    caption: "Body as landscape, landscape as body",
    body: "Figures dissolve into and emerge from fields of colour and mark. The body becomes a territory of emotion, memory, and longing.",
    works: [
      {
        title: "Dancing In The Celestial Garden",
        img: `${BASE}/92da99f97_DancingInTheCelestialGarden.jpg`,
      },
      { title: "Birth Of A New Humanity", img: `${BASE}/fa435309c_BirthOfANewHumanity.jpg` },
      { title: "Break Free From The Egg", img: `${BASE}/51a36c947_BreakFreeFromTheEgg.jpg` },
      { title: "Woman On The Grass", img: `${BASE}/f87246eef_WomanOnTheGrass.jpg` },
      { title: "Woman With The Moon", img: `${BASE}/e0709cd30_WomanWithTheMoon.jpg` },
      { title: "The Fall Of An Angel", img: `${BASE}/444fa2580_TheFallOfAnAngel.jpg` },
      {
        title: "From Softness To Boundlessness",
        img: `${BASE}/a5a42baf4_FromSoftnessToBoundlessness.jpg`,
      },
      { title: "The Kiss", img: `${BASE}/4050a49c1_TheKiss.jpg` },
    ],
  },
  {
    num: "VI",
    slug: "vision-worlds",
    title: "Vision Worlds",
    caption: "The labyrinth of the subconscious",
    body: "Dense, immersive dreamscapes where symbols, creatures and pattern overflow the canvas. Sacred animals carry messages across thresholds.",
    works: [
      { title: "Heart Of Obangsaek", img: `${BASE}/a8a8675b2_HeartOfObangsaek.jpg` },
      { title: "Memory Left By A Dream", img: `${BASE}/c3d284def_MemoryLeftByADream.jpg` },
      { title: "Dream Of Hope", img: `${BASE}/22e37dce9_DreamOfHope.jpg` },
      { title: "Freedom Of Consciousness", img: `${BASE}/593f7c3ac_FreedomOfConsciousness.jpg` },
      { title: "Life Is An Unknowable Maze", img: `${BASE}/e6e6e8fac_LifeIsAnUnknowableMaze.jpg` },
      {
        title: "The Landscape Between Cracks",
        img: `${BASE}/6f88c234e_TheLandscapeBetweenCracks.jpg`,
      },
      { title: "The Landscape Of My Heart", img: `${BASE}/e3704a6a4_TheLandscapeOfMyHeart.jpg` },
      { title: "The Soul Walks In Circles", img: `${BASE}/8c188028f_TheSoulWalksInCircles.jpg` },
    ],
  },
  {
    num: "VII",
    slug: "connections",
    title: "Connections",
    caption: "Between us, between worlds",
    body: "Works exploring relationship — love, loss, touch, and the invisible threads that bind one being to another across space and time.",
    works: [
      { title: "Between Us", img: `${BASE}/021ef4fb8_BetweenUs.jpg` },
      { title: "Fragments Of Love", img: `${BASE}/6c23dae3c_FragmentsOfLove.jpg` },
      { title: "In The Name Of Love", img: `${BASE}/925b8f8fa_InTheNameOfLove.jpg` },
      { title: "The Temperature Of Rain", img: `${BASE}/452dff14c_TheTemperatureOfRain.jpg` },
      { title: "The Temperature Of Life", img: `${BASE}/cf6513552_TheTemperatureOfLife.jpg` },
      { title: "Tears Of Light", img: `${BASE}/cc82dd267_TearsOfLight.jpg` },
      { title: "Toward The Light", img: `${BASE}/9bf8fc742_TowardTheLight.jpg` },
      { title: "Through The Darkness", img: `${BASE}/f3a5f53d6_ThroughTheDarkness.jpg` },
    ],
  },
];
