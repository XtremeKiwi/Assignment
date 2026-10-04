<script setup>
import { reactive, provide } from 'vue'
import { RouterView } from 'vue-router'

// Provide player stats (reactive) to descendants
const playerStats = reactive({
  userImage: '/Unicorn.webp',
  username: 'PrincessUnikørn',
  class: 'Couchpotato',
  level: 12,
  currentXP: 500,
  eurodollar: 0,
  euroDollar: 60,
  description:
    'Princess Unikørn is not your average hacker. While most cybersecurity experts spend years mastering networking, encryption, and advanced exploit development, Princess Unikørn somehow achieves the same results through a combination of caffeine, determination, and what scientists have reluctantly classified as pure chaos.'
})

// Provide items (reactive array)
const items = reactive([
  {
    name: 'Neon Blade',
    description: 'A plasma-edged sword that hums with electric energy.',
    buyValue: 850,
    sellValue: 425,
    ability: 'Energy Slash'
  },
  {
    name: 'Cyber Injector',
    description: 'A military-grade stimpack that rapidly repairs nanites.',
    buyValue: 300,
    sellValue: 150,
    ability: 'Nano Heal'
  },
  {
    name: 'Ghost Protocol Cloak',
    description: 'An adaptive cloak that bends light around the user.',
    buyValue: 2200,
    sellValue: 1100,
    ability: 'Invisibility'
  },
  {
    name: 'Quantum Visor',
    description: 'A smart visor capable of analyzing targets in real time.',
    buyValue: 1200,
    sellValue: 600,
    ability: 'Target Scan'
  },
  {
    name: 'Pulse Shield',
    description: 'A portable energy barrier powered by fusion cells.',
    buyValue: 950,
    sellValue: 475,
    ability: 'Force Field'
  },
  {
    name: 'Neural Accelerator',
    description: 'A brain implant that boosts reflexes and reaction speed.',
    buyValue: 3000,
    sellValue: 1500,
    ability: 'Reflex Boost'
  },
  {
    name: 'EMP Grenade',
    description: 'Disables nearby electronics with a powerful pulse.',
    buyValue: 500,
    sellValue: 250,
    ability: 'System Shutdown'
  },
  {
    name: 'Data Shard',
    description: 'An encrypted storage crystal containing valuable secrets.',
    buyValue: 750,
    sellValue: 375,
    ability: 'Data Extraction'
  },
  {
    name: 'Overclock Chip',
    description: 'Increases cybernetic performance beyond safe limits.',
    buyValue: 1800,
    sellValue: 900,
    ability: 'Overclock'
  },
  {
    name: 'VoidDrive Core',
    description: 'A rare experimental power source from a forgotten megacorp.',
    buyValue: 5000,
    sellValue: 2500,
    ability: 'Warp Jump'
  },
  // 100 handcrafted, tech-themed items
  { name: 'Skyline Relay', description: 'A rooftop signal repeater that keeps urban comms stable during storms.', buyValue: 220, sellValue: 110, ability: 'Signal Boost' },
  { name: 'Plasma Weave', description: 'An ultra-thin conductive fabric used in high-end powered armor.', buyValue: 310, sellValue: 155, ability: 'Thermal Spike' },
  { name: 'Null Lattice', description: 'A lattice of anti-noise nodes used to suppress hostile signal interference.', buyValue: 440, sellValue: 220, ability: 'Signal Boost' },
  { name: 'Nova Coil', description: 'An energised coil designed to amplify pulse weapon output.', buyValue: 620, sellValue: 310, ability: 'Overclock' },
  { name: 'Cipher Lens', description: 'A tactical lens that reads encrypted light patterns in real time.', buyValue: 560, sellValue: 280, ability: 'Target Scan' },
  { name: 'Pulse Lattice', description: 'A modular mesh that channels electric force into precision strikes.', buyValue: 770, sellValue: 385, ability: 'EMP Pulse' },
  { name: 'Ashen Battery', description: 'A compact energy pack built for long-ranged field operations.', buyValue: 410, sellValue: 205, ability: 'Nano Repair' },
  { name: 'Aether Fuse', description: 'A low-profile fuse that prevents catastrophic power surges.', buyValue: 530, sellValue: 265, ability: 'Power Guard' },
  { name: 'Drift Engine', description: 'A precision engine core for agile drones and rapid-response craft.', buyValue: 890, sellValue: 445, ability: 'Overclock' },
  { name: 'Hexo Scanner', description: 'A small scanner that maps hidden structures beneath dense terrain.', buyValue: 680, sellValue: 340, ability: 'Target Scan' },
  { name: 'Photon Dagger', description: 'A blade that cuts through low-density barriers with light-fragment strikes.', buyValue: 960, sellValue: 480, ability: 'Energy Slash' },
  { name: 'Cinder Circuit', description: 'A resilient circuit board that redirects heat away from sensitive systems.', buyValue: 575, sellValue: 287, ability: 'Thermal Spike' },
  { name: 'Holo Thread', description: 'A self-generating thread used in emerging stealth garments.', buyValue: 420, sellValue: 210, ability: 'Invisibility' },
  { name: 'Arc Siphon', description: 'A symbiosis device that harvests ambient charge during combat.', buyValue: 760, sellValue: 380, ability: 'Nano Repair' },
  { name: 'Velvet Node', description: 'A tightly packed neural node that improves personal response speed.', buyValue: 830, sellValue: 415, ability: 'Reflex Boost' },
  { name: 'Vector Core', description: 'A compact core designed to balance power and stability in heavy armor.', buyValue: 1220, sellValue: 610, ability: 'Power Guard' },
  { name: 'Jade Reactor', description: 'A compact fusion reactor with a remarkably low thermal signature.', buyValue: 1390, sellValue: 695, ability: 'Overclock' },
  { name: 'Kite Circuit', description: 'A lightweight circuit designed for airborne drones with high maneuverability.', buyValue: 700, sellValue: 350, ability: 'Signal Boost' },
  { name: 'Mire Analyzer', description: 'A scanning array that detects hostile activity beneath fog and smoke.', buyValue: 540, sellValue: 270, ability: 'Target Scan' },
  { name: 'Glass Byte', description: 'A crystalline storage chip containing secure encrypted fragments.', buyValue: 680, sellValue: 340, ability: 'Data Extraction' },
  { name: 'Copper Bloom', description: 'A regenerative charge component that restores power after heavy usage.', buyValue: 880, sellValue: 440, ability: 'Nano Repair' },
  { name: 'Orbital Hook', description: 'A magnetic grappling aid built for zero-gravity movement and salvage runs.', buyValue: 930, sellValue: 465, ability: 'Reflex Boost' },
  { name: 'Iris Prism', description: 'A shifting prism that filters hostile optics and reveals hidden pathways.', buyValue: 1040, sellValue: 520, ability: 'Invisibility' },
  { name: 'Rift Motor', description: 'An experimental motor that thrives in unstable spatial conditions.', buyValue: 1410, sellValue: 705, ability: 'Warp Jump' },
  { name: 'Fortune Relay', description: 'A secure relay node used to reroute signals through hostile territory.', buyValue: 720, sellValue: 360, ability: 'Signal Boost' },
  { name: 'Violet Fins', description: 'A stabilizer set built for submerged tactical vehicles and drones.', buyValue: 660, sellValue: 330, ability: 'Power Guard' },
  { name: 'Spectral Ink', description: 'An electronic ink that can alter the visible signature of a device.', buyValue: 910, sellValue: 455, ability: 'Invisibility' },
  { name: 'Echo Lens', description: 'A matrix of micro-lenses that tracks hostile motion through dense fog.', buyValue: 790, sellValue: 395, ability: 'Target Scan' },
  { name: 'Phase Shield', description: 'A compact shield emitter that briefly distorts incoming damage.', buyValue: 1180, sellValue: 590, ability: 'Force Field' },
  { name: 'Flux Lantern', description: 'A lantern that stores solar charge and powers field repairs after dark.', buyValue: 390, sellValue: 195, ability: 'Nano Repair' },
  { name: 'Gale Spur', description: 'A light alloy spur used in fast melee combat and signal disruption.', buyValue: 845, sellValue: 422, ability: 'Energy Slash' },
  { name: 'Sable Circuit', description: 'A stealth-adapted circuit that hides thermal signatures during infiltration.', buyValue: 860, sellValue: 430, ability: 'Invisibility' },
  { name: 'Sunwave Dial', description: 'A precision dial that adjusts energy output to match battlefield conditions.', buyValue: 610, sellValue: 305, ability: 'Overclock' },
  { name: 'Feral Node', description: 'A high-speed node that boosts local feedback loops in combat systems.', buyValue: 730, sellValue: 365, ability: 'Reflex Boost' },
  { name: 'Polaris Gate', description: 'A gateway interface for remotely controlling a swarm of field drones.', buyValue: 1260, sellValue: 630, ability: 'Signal Boost' },
  { name: 'Helio Core', description: 'A charging core that absorbs daylight and converts it to battlefield power.', buyValue: 1185, sellValue: 592, ability: 'Power Guard' },
  { name: 'Obsidian Filter', description: 'An advanced filter that strips hostile scan signatures from a payload.', buyValue: 810, sellValue: 405, ability: 'Target Scan' },
  { name: 'Wire Bloom', description: 'A self-healing conductor designed to stabilize unstable energy lines.', buyValue: 655, sellValue: 327, ability: 'Nano Repair' },
  { name: 'Vanta Coil', description: 'A coil wrapped in anti-radar material for deep covert operations.', buyValue: 975, sellValue: 487, ability: 'Invisibility' },
  { name: 'Trigger Hive', description: 'A highly efficient trigger matrix built for rapid-fire cyber weapons.', buyValue: 1090, sellValue: 545, ability: 'EMP Pulse' },
  { name: 'Magnet Bloom', description: 'A magnetic bloom designed to pull incoming attack vectors away from the user.', buyValue: 930, sellValue: 465, ability: 'Force Field' },
  { name: 'Dawn Relay', description: 'An atmospheric relay that boosts strong signal reception on higher ground.', buyValue: 580, sellValue: 290, ability: 'Signal Boost' },
  { name: 'Volt Thread', description: 'A conductive thread used in tactical gloves and combat-focused wearables.', buyValue: 640, sellValue: 320, ability: 'Energy Slash' },
  { name: 'Prism Cache', description: 'A sealed cache of crystalline data shards for encrypted storage.', buyValue: 710, sellValue: 355, ability: 'Data Extraction' },
  { name: 'Nightshard', description: 'A pale crystal used to block scanning pulses during covert movement.', buyValue: 1010, sellValue: 505, ability: 'Invisibility' },
  { name: 'Warden Lens', description: 'A lens module that magnifies hostile movement patterns and weak points.', buyValue: 1140, sellValue: 570, ability: 'Target Scan' },
  { name: 'Cinder Flux', description: 'A combustible flux that adds a violent burst to plasma weapons.', buyValue: 920, sellValue: 460, ability: 'Thermal Spike' },
  { name: 'Echo Well', description: 'A resonant crystal chamber used to store and replay tactical signal packets.', buyValue: 760, sellValue: 380, ability: 'Signal Boost' },
  { name: 'Glimmer Cell', description: 'A tiny cell that stores enough charge to power a field medic kit.', buyValue: 500, sellValue: 250, ability: 'Nano Repair' },
  { name: 'Arc Diamond', description: 'A compressed crystal that amplifies power conversion with minimal heat loss.', buyValue: 1300, sellValue: 650, ability: 'Overclock' },
  { name: 'Abyss Pearl', description: 'A luminous pearl used to stabilize quantum storage and recall around edges.', buyValue: 1450, sellValue: 725, ability: 'Warp Jump' },
  { name: 'Solar Hook', description: 'A compact industrial hook built to lift heavy modules during rapid repairs.', buyValue: 690, sellValue: 345, ability: 'Power Guard' },
  { name: 'Comet Thread', description: 'A tactical thread woven with resistive fiber to absorb repeated impacts.', buyValue: 825, sellValue: 412, ability: 'Force Field' },
  { name: 'Fission Reed', description: 'A reed-like reactive material used to disperse unstable energy currents.', buyValue: 740, sellValue: 370, ability: 'Thermal Spike' },
  { name: 'Nexus Fork', description: 'A branching device that splits a signal to several linked systems instantly.', buyValue: 860, sellValue: 430, ability: 'Signal Boost' },
  { name: 'Rustline Relay', description: 'An old-world relay node retrofitted for high-speed urban communications.', buyValue: 540, sellValue: 270, ability: 'Signal Boost' },
  { name: 'Vanta Signet', description: 'A darkened signet that suppresses the visible edge of a weapon.', buyValue: 880, sellValue: 440, ability: 'Invisibility' },
  { name: 'Aster Coax', description: 'A precision coaxial cable bundle used in advanced combat sensors.', buyValue: 610, sellValue: 305, ability: 'Target Scan' },
  { name: 'Jet Fuse', description: 'A critical fuse used in aerial drones to prevent engine stall under stress.', buyValue: 840, sellValue: 420, ability: 'Overclock' },
  { name: 'Quill Datum', description: 'A sensor datum shaped to capture small variance in hostile activity.', buyValue: 720, sellValue: 360, ability: 'Target Scan' },
  { name: 'Giga Gear', description: 'A gear wheel built to handle extreme load pressure and rapid rotation.', buyValue: 760, sellValue: 380, ability: 'Reflex Boost' },
  { name: 'Noir Prism', description: 'A prism that manipulates light to disrupt visual tracking in dark zones.', buyValue: 980, sellValue: 490, ability: 'Invisibility' },
  { name: 'Signal Bloom', description: 'A broadcast bloom that increases local range without sacrificing precision.', buyValue: 700, sellValue: 350, ability: 'Signal Boost' },
  { name: 'Quasar Vial', description: 'A potent vial that supercharges energy transfer for tactical grenades.', buyValue: 640, sellValue: 320, ability: 'EMP Pulse' },
  { name: 'Rivet Array', description: 'An industrial array designed to support heavy modular repairs in the field.', buyValue: 520, sellValue: 260, ability: 'Power Guard' },
  { name: 'Monarch Coil', description: 'A coil tuned to absorb power spikes and release them in measured bursts.', buyValue: 1030, sellValue: 515, ability: 'Overclock' },
  { name: 'Luma Cable', description: 'A cable infused with light-responsive material for high-speed signal transfer.', buyValue: 450, sellValue: 225, ability: 'Signal Boost' },
  { name: 'Ember Lattice', description: 'A protective lattice that channels thermal output away from delicate internals.', buyValue: 550, sellValue: 275, ability: 'Thermal Spike' },
  { name: 'Grit Harness', description: 'A tension brace built for rapid stabilization in heavy combat suits.', buyValue: 620, sellValue: 310, ability: 'Force Field' },
  { name: 'Meridian Band', description: 'A band of conductive metal that regulates power flow and strain.', buyValue: 710, sellValue: 355, ability: 'Nano Repair' },
  { name: 'Glass Rail', description: 'A lightweight rail used to anchor heavy cyber-limbs in motion.', buyValue: 470, sellValue: 235, ability: 'Power Guard' },
  { name: 'Halo Relay', description: 'A relay beacon that projects a stable signal field over difficult terrain.', buyValue: 860, sellValue: 430, ability: 'Signal Boost' },
  { name: 'Velvet Relay', description: 'A low-noise relay designed to carry encrypted comms through hostile zones.', buyValue: 820, sellValue: 410, ability: 'Data Extraction' },
  { name: 'Helix Mote', description: 'An intelligent mote that tracks and repairs minor damage in real time.', buyValue: 760, sellValue: 380, ability: 'Nano Repair' },
  { name: 'Ion Pike', description: 'A combat pike that releases an ionized burst on impact.', buyValue: 990, sellValue: 495, ability: 'Energy Slash' },
  { name: 'Zircon Cache', description: 'A modular cache for encrypted archives and high-value tactical data.', buyValue: 880, sellValue: 440, ability: 'Data Extraction' },
  { name: 'Mist Engine', description: 'An engine tuned for silent movement and low heat output under stress.', buyValue: 1120, sellValue: 560, ability: 'Invisibility' },
  { name: 'Khaki Relay', description: 'A rugged relay node built for heavy industrial areas and dust corridors.', buyValue: 390, sellValue: 195, ability: 'Signal Boost' },
  { name: 'Hexa Lens', description: 'A multi-angle lens used to spot movement behind cover and smoke.', buyValue: 710, sellValue: 355, ability: 'Target Scan' },
  { name: 'Silver Hush', description: 'A suppressor with a silent field that lowers sound signatures dramatically.', buyValue: 930, sellValue: 465, ability: 'Invisibility' },
  { name: 'Gale Coil', description: 'A compact coil designed to handle rapid velocity changes in drones.', buyValue: 670, sellValue: 335, ability: 'Reflex Boost' },
  { name: 'Ion Prism', description: 'A prism that splits energy waves to improve scanning and aim calibration.', buyValue: 780, sellValue: 390, ability: 'Target Scan' },
  { name: 'Obsidian Pulse', description: 'A pulse engine add-on that bursts power into already loaded weapons.', buyValue: 1035, sellValue: 517, ability: 'EMP Pulse' },
  { name: 'Carbon Bloom', description: 'An adaptive bloom used in body armor to absorb repeated shock loads.', buyValue: 900, sellValue: 450, ability: 'Force Field' },
  { name: 'Kite Array', description: 'A broad array of sensors tuned for fast airborne reconnaissance flights.', buyValue: 825, sellValue: 412, ability: 'Target Scan' },
  { name: 'Quantum Flare', description: 'A star-like flare that reveals stealth signatures through low visibility.', buyValue: 1100, sellValue: 550, ability: 'Target Scan' },
  { name: 'Prism Rail', description: 'A super-light rail used to mount utility tools to armoured frame systems.', buyValue: 470, sellValue: 235, ability: 'Power Guard' },
  { name: 'Moon Coil', description: 'A compact coil designed to store moonlit energy for long tactical operations.', buyValue: 820, sellValue: 410, ability: 'Overclock' },
  { name: 'Cinder Shard', description: 'A shard of heat-reactive crystal forged to amplify weapon strafe output.', buyValue: 1000, sellValue: 500, ability: 'Thermal Spike' },
  { name: 'Static Bloom', description: 'A field bloom that redistributes surge energy and reduces damage from spikes.', buyValue: 640, sellValue: 320, ability: 'Power Guard' },
  { name: 'Horizon Grid', description: 'A grid of signal towers designed for broad urban communications networks.', buyValue: 780, sellValue: 390, ability: 'Signal Boost' },
  { name: 'Nectar Core', description: 'A stabilised core built to send delicate signals over long distances.', buyValue: 850, sellValue: 425, ability: 'Data Extraction' },
  { name: 'Grail Lens', description: 'A lens that isolates hidden micro-thermal signatures across dense terrain.', buyValue: 760, sellValue: 380, ability: 'Target Scan' },
  { name: 'Sundial Fuse', description: 'A fuse designed to time energy release in high-risk tactical loadouts.', buyValue: 690, sellValue: 345, ability: 'Overclock' },
  { name: 'Velvet Relay', description: 'A relay tuned to remain stable under rapid battlefield signal congestion.', buyValue: 730, sellValue: 365, ability: 'Signal Boost' },
  { name: 'Moth Relay', description: 'An ultra-light relay used for covert courier and infiltration operations.', buyValue: 490, sellValue: 245, ability: 'Invisibility' },
  { name: 'Shatter Coil', description: 'A heavy coil that can absorb shock and release it as a focused counterpulse.', buyValue: 1140, sellValue: 570, ability: 'EMP Pulse' },
  { name: 'Gleam Core', description: 'A bright assembly that accelerates charge transfer in powered armor.', buyValue: 980, sellValue: 490, ability: 'Nano Repair' },
  { name: 'Morrow Lens', description: 'A lens built to read magnetic anomalies and hostile subterranean structures.', buyValue: 840, sellValue: 420, ability: 'Target Scan' },
  { name: 'Halo Thread', description: 'A luminous thread used in garments that improve reaction speed and awareness.', buyValue: 730, sellValue: 365, ability: 'Reflex Boost' },
  { name: 'Nova Fork', description: 'A tuned fork that doubles as a signal splitter and melee edge enhancer.', buyValue: 970, sellValue: 485, ability: 'Energy Slash' },
  { name: 'Granite Relay', description: 'A relay beacon built for rugged hardline control over industrial machinery.', buyValue: 610, sellValue: 305, ability: 'Signal Boost' },
  { name: 'Tempest Grid', description: 'A dense grid designed to direct atmospheric charge into controlled release.', buyValue: 1220, sellValue: 610, ability: 'Thermal Spike' },
  { name: 'Pulse Rune', description: 'A rune etched onto a microchip to stabilize volatile field reactions.', buyValue: 890, sellValue: 445, ability: 'Force Field' },
  { name: 'Sailor Relay', description: 'A low-profile relay built to maintain contact over open water and fog banks.', buyValue: 530, sellValue: 265, ability: 'Signal Boost' },
  { name: 'Rift Hush', description: 'A noise dampener tuned to hide movement during stealth infiltration.', buyValue: 910, sellValue: 455, ability: 'Invisibility' },
  { name: 'Echo Circuit', description: 'A feedback circuit that improves response timing in high-pressure environments.', buyValue: 700, sellValue: 350, ability: 'Reflex Boost' },
  { name: 'Plasma Tether', description: 'A tether that channels plasma energy between allies during coordinated attacks.', buyValue: 1040, sellValue: 520, ability: 'Energy Slash' },
  { name: 'Northstar Beam', description: 'A beam emitter designed to mark and disrupt distant hostile targets.', buyValue: 1180, sellValue: 590, ability: 'Target Scan' },
  { name: 'Talon Grid', description: 'A lightweight control grid for terrain-aware drones and sweep drones.', buyValue: 780, sellValue: 390, ability: 'Signal Boost' },
  { name: 'Spire Cell', description: 'A highly efficient battery cell crafted for extended tactical field usage.', buyValue: 570, sellValue: 285, ability: 'Nano Repair' },
  { name: 'Basilisk Lens', description: 'A high-contrast lens that reveals weak points in hostile armor plating.', buyValue: 920, sellValue: 460, ability: 'Target Scan' },
  { name: 'Quartz Echo', description: 'A crystal resonator capable of replaying stored sensor patterns for analysis.', buyValue: 790, sellValue: 395, ability: 'Data Extraction' },
  { name: 'Cobalt Hook', description: 'A sturdy hook for rapid anchoring and extraction during heavy battlefield movement.', buyValue: 680, sellValue: 340, ability: 'Power Guard' },
  { name: 'Apex Motor', description: 'A premium motor used in swift combat craft and precision pursuit units.', buyValue: 1310, sellValue: 655, ability: 'Overclock' },
  { name: 'Dusk Loom', description: 'A loom of conductive fibers used in advanced stealth wear and shields.', buyValue: 860, sellValue: 430, ability: 'Invisibility' },
  { name: 'Beacon Reed', description: 'A reed-like signal aid used to keep squad links alive through debris fields.', buyValue: 500, sellValue: 250, ability: 'Signal Boost' },
  { name: 'Volt Harbor', description: 'A compact harbor module that stores excess charge and distributes it safely.', buyValue: 825, sellValue: 412, ability: 'Nano Repair' },
  { name: 'Vector Bloom', description: 'A bloom designed to redirect burst damage away from the main chassis.', buyValue: 960, sellValue: 480, ability: 'Force Field' },
  { name: 'Cipher Bloom', description: 'A hidden bloom that masks powerful reads while data is being extracted.', buyValue: 870, sellValue: 435, ability: 'Data Extraction' },
  { name: 'Signal Prism', description: 'A prism tuned to emit stabilised signals over long distances with minimal loss.', buyValue: 630, sellValue: 315, ability: 'Signal Boost' },
  { name: 'Glint Coil', description: 'A reflective coil optimized for rapid charge cycling and efficient recovery.', buyValue: 740, sellValue: 370, ability: 'Nano Repair' },
  { name: 'Sunline Grid', description: 'A modular grid that stores daylight energy and releases it on demand.', buyValue: 980, sellValue: 490, ability: 'Overclock' },
  { name: 'Nova Thread', description: 'A thread woven with conductive fibers that react to impact and heat.', buyValue: 790, sellValue: 395, ability: 'Thermal Spike' },
  { name: 'Aster Grid', description: 'A field grid used to stabilize drones against shifting terrain and wind.', buyValue: 720, sellValue: 360, ability: 'Signal Boost' },
  { name: 'Rook Lens', description: 'A tactical lens that reveals subtle traces of hostile movement across long range.', buyValue: 1020, sellValue: 510, ability: 'Target Scan' },
  { name: 'Poltergeist Coil', description: 'A restless coil that pulses with unstable energy and deflects incoming bursts.', buyValue: 1180, sellValue: 590, ability: 'EMP Pulse' },
  { name: 'Hush Pearl', description: 'A highly polished pearl used for stealth buffering in covert ops.', buyValue: 930, sellValue: 465, ability: 'Invisibility' },
  { name: 'Crimson Relay', description: 'A high-priority relay used to secure command traffic during urban warfare.', buyValue: 1090, sellValue: 545, ability: 'Signal Boost' },
  { name: 'Pillar Fuse', description: 'A bulky fuse built to stabilize massive power loads in mechs and turrets.', buyValue: 1260, sellValue: 630, ability: 'Power Guard' },
  { name: 'Ion Bloom', description: 'A bloom that rapidly channels ambient charge into armored weapon systems.', buyValue: 920, sellValue: 460, ability: 'Overclock' },
  { name: 'Drift Lantern', description: 'A field lantern that glows in sync with the battery load and signal integrity.', buyValue: 480, sellValue: 240, ability: 'Nano Repair' }

])

// Provide a fake chat dataset (users and message pool)
const chatData = reactive({
  users: [
    {
      name: 'Thorgal',
      color: '#c79c6e',
      description: 'Tank at the front line and always ready for the next dungeon run.',
      avatar: '/avatars/thorgal.png'
    },
    {
      name: 'Mira',
      color: '#a9d6e5',
      description: 'Arcane mage who never misses a perfect spell rotation.',
      avatar: '/avatars/mira.png'
    },
    {
      name: 'Korvax',
      color: '#e0a7a7',
      description: 'An engineer with a knack for crafting impossible tech solutions.',
      avatar: '/avatars/korvax.png'
    },
    {
      name: 'Sable',
      color: '#b7d7a8',
      description: 'Rogue with a sharp eye for loot, stealth, and shortcuts.',
      avatar: '/avatars/sable.png'
    }
  ],
  messagesPool: [
    "Anyone up for a dungeon run?",
    "Need healer for Molten Core!",
    "Selling rare drop, whisper me",
    "Who knows the recipe for elixir of agility?",
    "That boss mechanic was wild",
    "LF tank for heroic quest",
    "Congrats on the epic loot!",
    "Meet at the inn in 10",
    "Need help with a quest item",
    "Nice roll!"
  ],
  // currentUser is the local player name shown when typing/sending
  currentUser: { name: 'You', color: '#fff07a' }
})

// Provide a centralized quest pool for TaskGenerator
const quests = reactive([
  { id: 1, title: 'Scan the neon ruins', reward: 75, description: 'Sweep the abandoned towers and clear the power grid.' },
  { id: 2, title: 'Deliver the encrypted shard', reward: 110, description: 'Carry the encoded data to the guild relay station.' },
  { id: 3, title: 'Eliminate the rogue drones', reward: 140, description: 'Clear the maintenance drones from the undercity tunnel.' },
  { id: 4, title: 'Protect the generator', reward: 160, description: 'Defend the core generator during the raid wave.' },
  { id: 5, title: 'Recover the lost memory core', reward: 190, description: 'Retrieve the ghosted artifact from the ruined lab.' },
  { id: 6, title: 'Clean the data vault', reward: 210, description: 'Wipe corruption from the guild archive before it spreads.' },
  { id: 7, title: 'Escort the courier', reward: 120, description: 'Deliver the courier through hostile rooftops and alleys.' },
  { id: 8, title: 'Defend the relay station', reward: 180, description: 'Hold the signal relay until reinforcements arrive.' },
  { id: 9, title: 'Repair the drone bay', reward: 150, description: 'Restore the damaged drone bay before the next surge.' },
  { id: 10, title: 'Unlock the hidden cache', reward: 220, description: 'Breach the locked cache beneath the abandoned market.' }
])

const completedTasks = reactive([])

provide('playerStats', playerStats)
provide('items', items)
provide('chatData', chatData)
provide('quests', quests)
provide('completedTasks', completedTasks)
</script>

<template>
    <RouterView />
</template>
