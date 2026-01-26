import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Radio, Drill, Box, Laptop, Leaf, ChevronRight, Waves, Plane, Mountain, Zap, Droplets, Hammer, FileText, Database, BarChart3, Recycle, Target, Shield, GraduationCap, Map, Globe, Smartphone, LineChart, Code, BookOpen, Layers, Pickaxe, Settings, BoxSelect, FlaskConical, Atom, Microscope, Beaker, Thermometer, Container, Cog, Award, CheckCircle2, ShoppingBag, Scale, FlaskRound, Flame, Eye, Magnet, HardHat, Compass, Package, Camera, Wrench, Headphones } from "lucide-react";
import geophysicsSurvey from "@/assets/geophysics-survey.jpg";
import drillingRig from "@/assets/drilling-rig.jpg";
import modeling3d from "@/assets/3d-modeling.jpg";
import coreAnalysisVideo from "@/assets/core-analysis.mp4";
import tabletDataEntry from "@/assets/tablet-data-entry.jpg";
const servicePillars = [{
  id: "geophysics",
  icon: Radio,
  title: "Geophysical Surveys",
  tagline: "Subsurface Characterization",
  description: "Non-invasive geophysical methods providing defensible structural and lithological interpretations for drill targeting and resource delineation.",
  image: geophysicsSurvey,
  services: [{
    icon: Waves,
    name: "Ground Penetrating Radar (GPR)",
    description: "High-resolution shallow subsurface imaging for alluvial and near-surface investigations"
  }, {
    icon: Plane,
    name: "Airborne & UAV Magnetics",
    description: "Rapid coverage magnetic surveys for structural mapping and target generation"
  }, {
    icon: Mountain,
    name: "LiDAR & Topographic Surveys",
    description: "Precision topographic mapping for pit design and volumetric calculations"
  }, {
    icon: Zap,
    name: "Induced Polarization (IP/Res)",
    description: "Detection of disseminated sulphide mineralization and resistivity contrasts"
  }, {
    icon: Droplets,
    name: "Gravity & Ground Magnetics",
    description: "Density and magnetic susceptibility mapping for deep geological structures"
  }]
}, {
  id: "drilling",
  icon: Drill,
  title: "Drilling & Sampling",
  tagline: "Core Recovery Excellence",
  description: "QAQC-compliant drilling programs delivering representative samples for accurate resource assessment and grade estimation.",
  image: drillingRig,
  services: [{
    icon: Drill,
    name: "Diamond Core Drilling",
    description: "HQ/NQ core recovery for detailed lithological logging and assay sampling"
  }, {
    icon: Hammer,
    name: "Reverse Circulation (RC) Drilling",
    description: "Cost-effective grade control and resource definition programs"
  }, {
    icon: FileText,
    name: "Core Logging & Photography",
    description: "Systematic geological documentation with digital capture workflows"
  }, {
    icon: Target,
    name: "Downhole Surveys",
    description: "Gyroscopic and magnetic deviation surveys for hole trajectory verification"
  }]
}, {
  id: "modeling",
  icon: Box,
  title: "Resource Estimation & BFS",
  tagline: "Investment-Grade Outputs",
  description: "JORC/SAMREC-compliant resource estimation and feasibility studies meeting international banking and investment standards.",
  image: modeling3d,
  services: [{
    icon: Box,
    name: "Mineral Resource Estimation",
    description: "Geostatistical modelling with full uncertainty quantification"
  }, {
    icon: Shield,
    name: "Competent Persons Reports",
    description: "JORC/SAMREC-compliant CPRs for listing and financing purposes"
  }, {
    icon: BarChart3,
    name: "Pre-Feasibility Studies (PFS)",
    description: "Technical and economic assessments for project advancement"
  }, {
    icon: FileText,
    name: "Bankable Feasibility Studies",
    description: "Investment-grade technical reports for project financing"
  }]
}, {
  id: "digital",
  icon: Laptop,
  title: "Digital Solutions",
  tagline: "Data-Driven Workflows",
  description: "Integrated digital platforms enabling real-time data capture, validation, and visualization for operational efficiency.",
  image: tabletDataEntry,
  services: [{
    icon: Database,
    name: "Mobile Data Capture",
    description: "Field data collection with built-in validation and QAQC checks"
  }, {
    icon: BarChart3,
    name: "Operational Dashboards",
    description: "Real-time project monitoring and KPI tracking platforms"
  }, {
    icon: Laptop,
    name: "Cloud GIS Platforms",
    description: "Centralized spatial data management and multi-user access"
  }, {
    icon: Box,
    name: "3D Model Visualization",
    description: "Interactive geological model viewers for stakeholder presentations"
  }]
}, {
  id: "environmental",
  icon: Leaf,
  title: "Environmental & Closure",
  tagline: "ESG Compliance",
  description: "Environmental management and mine closure planning aligned with regulatory requirements and ESG expectations.",
  image: null,
  services: [{
    icon: FileText,
    name: "Environmental Management Plans",
    description: "Regulatory-compliant EMP development and implementation"
  }, {
    icon: Recycle,
    name: "Mine Closure Planning",
    description: "Progressive rehabilitation and closure cost estimation"
  }, {
    icon: Leaf,
    name: "Rehabilitation Monitoring",
    description: "Land restoration progress tracking and reporting"
  }, {
    icon: Droplets,
    name: "Hydrogeological Studies",
    description: "Groundwater assessments and water management planning"
  }]
}, {
  id: "laboratory",
  icon: FlaskConical,
  title: "Laboratory",
  tagline: "Analytical Excellence",
  description: "We provide comprehensive laboratory, analytical, scientific, and laboratory engineering services to the mining, minerals exploration, metallurgical, geotechnical, and environmental sectors. Our laboratory has been involved in analytical programmes across nearly all commodity groups, including precious metals, base metals, critical minerals, rare earth elements, industrial minerals, and environmental materials.",
  image: null,
  isLaboratory: true,
  laboratorySections: [{
    title: "Sample Preparation",
    icon: Beaker,
    intro: "End-to-end sample preparation services designed to ensure analytical accuracy and representativity.",
    items: ["Drying, screening, crushing, splitting, and pulverising", "Mechanical particle size distribution (sieve analysis)", "Particle size distribution by laser diffraction", "Preparation of rocks, drill core, soils, sands, ores, slurries, and solutions", "XRF sample preparation by pressed pellet and fused bead methods", "Sample digestion using microwave, acid, and fusion techniques"]
  }, {
    title: "Analytical Services",
    icon: Atom,
    intro: "Chemical and elemental analysis using industry-standard instrumentation and methodologies, including:",
    items: ["X-ray Fluorescence (XRF)", "Inductively Coupled Plasma (ICP-OES / ICP-MS)", "Atomic Absorption Spectrometry (AAS)"],
    note: "Analytical capabilities cover major elements, trace elements, ultra-trace elements, and ore-grade determinations."
  }, {
    title: "Heavy Mineral & Magnetic Separation",
    icon: Layers,
    intro: "Specialist separation services supporting mineral exploration, evaluation, and metallurgical characterisation.",
    items: ["Heavy liquid separation using heavy liquids", "Magnetic and paramagnetic separation (LIMS, MIMS, WHIMS)", "Mineral fractionation and concentrate preparation"],
    note: "Applicable to diamond indicator sampling, heavy mineral sands projects, and process mineralogy studies."
  }, {
    title: "Commodity-Specific Scientific Services",
    icon: Pickaxe,
    isSubsections: true,
    subsections: [{
      name: "Lithium (Trace and Ore Grade)",
      description: "Analysis of lithium-bearing materials including pegmatites, spodumene, and lithium-rich brines. Associated elements such as Nb, Ta, and Sn are routinely determined. Methods include mineral acid and fusion digestion with ICP-OES finish, supplemented by XRF where appropriate."
    }, {
      name: "Lead & Zinc",
      description: "Assay of Pb and Zn ores and high-grade concentrates using near-total digestion, ICP-OES, and fusion bead XRF techniques."
    }, {
      name: "Gold",
      description: "Gold analysis using BLEG and mini-BLEG techniques, complemented by fire assay. Suitable for regional exploration, bulk sampling, and grade control applications."
    }, {
      name: "Uranium",
      description: "Uranium analysis using XRF with full matrix corrections, supporting exploration and resource evaluation programmes."
    }, {
      name: "Copper",
      description: "Copper analysis including acid-soluble, cyanide-soluble, and residual leach techniques."
    }, {
      name: "Phosphates",
      description: "Analytical services for marine and on-shore phosphate projects, including grade determination and impurity profiling."
    }]
  }, {
    title: "Multi-Element Analytical Packages",
    icon: Database,
    intro: "Custom analytical suites designed to meet specific project requirements, typically including:",
    items: ["Major elements", "Trace metals", "Base and precious metals", "Rare Earth Elements (REEs)", "Lithium and critical minerals"],
    note: "Packages are configured to balance analytical resolution, turnaround time, and project objectives."
  }, {
    title: "Environmental & Water Analysis",
    icon: Droplets,
    intro: "Environmental testing services supporting baseline assessments, monitoring programmes, and compliance reporting.",
    items: ["Particle size distribution", "Trace metals, including mercury", "Total Organic Carbon (TOC)"],
    subItems: {
      title: "Non-potable water analysis:",
      items: ["pH, conductivity, and TDS", "Hardness and alkalinity", "Iron and turbidity"]
    }
  }, {
    title: "Physical Property Testing",
    icon: Thermometer,
    items: ["Specific gravity determination by gas pycnometer or wax displacement", "Bulk density and porosity testing"]
  }, {
    title: "Mineral Characterisation & Metallurgical Testwork",
    icon: Microscope,
    intro: "Advanced mineralogical and metallurgical services, including:",
    items: ["Automated mineralogy (QEMSCAN)", "X-ray Diffraction (XRD)", "Optical and scanning microscopy", "Bench-scale and pilot-scale metallurgical testwork", "Magnetic, electrostatic, density, and size separation", "Comminution, classification, flotation, and dewatering"]
  }, {
    title: "Process Evaluation & Engineering Support",
    icon: Cog,
    items: ["Mass flow and recovery evaluation", "Process sampling and testwork analysis", "Equipment selection and sizing", "Process flow diagrams (PFDs) and mass and water balances", "Techno-economic assessments", "Plant commissioning support and HAZOP studies"]
  }, {
    title: "Mobile & Containerised Laboratory Design and Construction",
    icon: Container,
    intro: "We design, engineer, construct, and commission fully integrated mobile and containerised laboratory facilities to support remote exploration, on-site testing, and operational laboratory requirements.",
    items: ["ISO-compliant laboratory layouts engineered to ISO/IEC 17025 and ISO 9001 requirements", "Modular containerised laboratories for analytical, sample preparation, and metallurgical testwork", "Integrated utilities including power distribution, HVAC, ventilation, dust control, and safety systems", "Fit-for-purpose laboratory furniture, instrumentation layouts, and workflow optimisation", "Deployment-ready solutions for exploration camps, mine sites, and marine or remote operations", "Full commissioning, method verification, and operational handover"],
    note: "These facilities provide rapid, reliable analytical capability while maintaining full quality assurance, data integrity, and regulatory compliance in field-based environments."
  }, {
    title: "Quality, Accreditation & Compliance",
    icon: Award,
    isAccreditation: true,
    items: ["Laboratory accredited to ISO/IEC 17025:2017", "Quality management system certified to ISO 9001", "Participation in external proficiency testing and round-robin programmes", "Full chain-of-custody, data validation, and QA/QC procedures"]
  }]
}, {
  id: "sales",
  icon: ShoppingBag,
  title: "Sales",
  tagline: "Equipment & Tools",
  description: "Comprehensive range of laboratory equipment, field instruments, and technical tools for geological, geotechnical, environmental, and mining applications. From sample preparation to advanced analytical instruments.",
  image: null,
  isSales: true,
  salesCategories: [{
    title: "Sample Preparation Equipment",
    icon: Hammer,
    description: "Essential tools for preparing geological, soil, and mineral samples. Includes rock crushers, jaw and roll crushers, core and trim saws, disc mills, pulverizers, ball mills, and rotary/riffle splitters. Ideal for breaking down samples to desired sizes for analysis."
  }, {
    title: "Weighing & Measuring",
    icon: Scale,
    description: "Precision measurement instruments for laboratory use. Includes analytical and top-loading balances, moisture balances, pipettes, burettes, volumetric flasks, and graduated cylinders. Perfect for accurate sample quantification and solution preparation."
  }, {
    title: "Glassware & Containers",
    icon: FlaskRound,
    description: "Standard laboratory containers and glassware. Beakers, test tubes, Erlenmeyer and volumetric flasks, funnels, watch glasses, crucibles, reagent bottles, and desiccators. Designed for sample storage, reactions, and lab experiments."
  }, {
    title: "Heating & Cooling Equipment",
    icon: Flame,
    description: "For temperature-sensitive experiments and sample treatment. Includes Bunsen burners, heating mantles, hot plates, water and oil baths, drying ovens, muffle furnaces, autoclaves, refrigerators, and deep freezers."
  }, {
    title: "Microscopy & Imaging",
    icon: Eye,
    description: "High-quality microscopes for detailed analysis. Compound, stereo, fluorescence, inverted, and digital microscopes. Includes camera attachments for documentation and imaging."
  }, {
    title: "Chemical Analysis & Spectrometry",
    icon: Atom,
    description: "Advanced analytical instruments for elemental and chemical characterization. Includes XRF spectrometers, atomic absorption spectrometers, ICP systems, and UV-Vis spectrophotometers."
  }, {
    title: "Thermal & Phase Analysis",
    icon: Thermometer,
    description: "Equipment to study material properties under heat. Includes differential thermal analyzers (DTA), thermogravimetric analyzers (TGA), heating ovens, and furnaces."
  }, {
    title: "Separation & Filtration",
    icon: Layers,
    description: "For isolating and classifying sample components. Centrifuges, mechanical and rotary sieves, shaking tables, hydrosizers, and sand classifiers."
  }, {
    title: "Safety & Protective Equipment",
    icon: Shield,
    description: "Protective gear for lab and field safety. Dust masks, ear protection, safety goggles, fire extinguishers, lab coats, gloves, and boots."
  }, {
    title: "Specialty Geological Tools",
    icon: Compass,
    description: "Field-ready equipment for geologists and mineral exploration. Core lifters, core trays and lids, roller logging tables, Brunton compasses, GPS units, protractors, goniometers, hammer sets, paint markers, aluminium tags, and field notebooks."
  }, {
    title: "General Lab Apparatus",
    icon: Beaker,
    description: "Additional laboratory essentials for sample handling and experiments. Mortar and pestles, magnetic and overhead stirrers, lab balances, dropper and reagent bottles, hot plates, crucibles, and watch glasses."
  }, {
    title: "Easy Scuba Water Quality Probes",
    icon: Droplets,
    description: "Budget-friendly water quality probes for EC, pH, DO, temperature, and turbidity. Portable and easy to use for fieldwork up to 50m depth. Optional sensors: depth, SDI-12, MODBUS.",
    isMonitoring: true
  }, {
    title: "Diver Water Level Loggers",
    icon: Waves,
    description: "Accurate water level and temperature data loggers. Includes Micro-Diver, TD-Diver, Cera-Diver, CTD-Diver, and Baro-Diver models for long-term monitoring. Suitable for groundwater and environmental studies.",
    isMonitoring: true
  }, {
    title: "HydraProbe Soil Sensors",
    icon: Mountain,
    description: "High-precision soil monitoring tools. Measure moisture, salinity (bulk EC), and temperature. Available as Standard (moisture/temperature) and Pro (moisture/salinity/temperature) versions. Compatible with SDI-12 loggers for field or telemetry data access.",
    isMonitoring: true
  }, {
    title: "Soil Biological Analysis – SOLISCA",
    icon: Leaf,
    description: "Affordable tool to measure soil life health. Assesses bacterial, fungal, protozoa, and nematode populations for sustainable soil management.",
    isMonitoring: true
  }, {
    title: "Soil & Water Analysis Kits",
    icon: FlaskConical,
    description: "Color charts, acidity, chloride, and hardness test kits for soil and water analysis.",
    isCivil: true
  }, {
    title: "Particle Size & Compaction Equipment",
    icon: Box,
    description: "Pipette method kits, sand equivalent tests, cone and pocket penetrometers, Casagrande apparatus, liquid/plastic limits, Proctor test kits, CBR/ITT machines, plate bearing, Benkelman beam apparatus, and oedometers.",
    isCivil: true
  }, {
    title: "Shear & Strength Testing Machines",
    icon: Cog,
    description: "Digital shear testing machines, triaxial cells, and data acquisition systems for geotechnical testing.",
    isCivil: true
  }, {
    title: "Magnetic Susceptibility & Mineral Separation",
    icon: Magnet,
    description: "Magnetic susceptibility meter, magnetic surface scanning sensor, induced roll magnetic separators, gravity concentrators, barrel and grinding pots, electromagnetic sieve shakers, and test sieves.",
    isCivil: true
  }, {
    title: "XRF & Mineral Analysis Instruments",
    icon: Target,
    description: "Handheld XRF, benchtop stands, sample cups, rare earth element analyzers, and mineral analysis setups including XRD.",
    isHighValue: true
  }, {
    title: "Laboratory Automation & Mixers",
    icon: Settings,
    description: "Autoclaves, centrifuges, disk rotators, dry baths, hotplates, magnetic stirrers, microplate mixers, overhead stirrers, roller mixers, rotary evaporators, shakers, thermal cyclers, and vortex mixers.",
    isHighValue: true
  }, {
    title: "Cameras & Imaging Accessories",
    icon: Camera,
    description: "Advanced Photographic Imaging System (Professional Grade) — An integrated, professional photographic solution designed for geological applications, capable of capturing ultra-high-resolution images of core samples. The system comprises precision camera kits and microscope imaging cameras, supported by high-performance data storage and control hardware, including SD memory solutions and dedicated tablets or ruggedized tablets. It further incorporates professional stylus input and purpose-built rugged tablet accessories, enabling accurate image capture, annotation, and data management in both laboratory and field environments.",
    isHighValue: true
  }, {
    title: "Consumables",
    icon: Package,
    description: "Buckets, tools, adhesives, tape, gloves, protective gear, markers, storage bins, tubing, PPE, saw blades, scrapers, and miscellaneous lab and field consumables.",
    isConsumables: true
  }, {
    title: "Personal Protective Equipment (PPE)",
    icon: HardHat,
    description: "Dust coats, boilersuits, gloves, boots, trousers, hard hats, and protective embroidery services.",
    isConsumables: true
  }],
  salesServices: ["Custom procurement and setup assistance", "Installation of monitoring stations and laboratory fit-outs", "Data acquisition, telemetry, and web portal access for soil and water monitoring", "Smart monitoring services with full control room support for continuous observation and alerts"]
}, {
  id: "training",
  icon: GraduationCap,
  title: "Training",
  tagline: "Professional Development",
  description: "Comprehensive ArcGIS and geological data training programs designed for exploration, mining, and geotechnical professionals. From foundational GIS skills to advanced 3D modelling and geostatistics.",
  image: null,
  isTraining: true,
  trainingStreams: [{
    streamTitle: "Stream A: Core ArcGIS Platform Training",
    courses: [{
      icon: Map,
      name: "ArcGIS Pro – Foundations",
      audience: "Graduate geologists, junior GIS users, technicians",
      overview: "Provides a comprehensive introduction to ArcGIS Pro, enabling participants to efficiently manage spatial data, create and edit geodatabases, and produce professional maps for technical and reporting purposes.",
      topics: ["ArcGIS Pro interface and project organisation", "Coordinate systems, projections, and spatial referencing", "Vector, raster, and tabular data management", "Creation and editing of geodatabase feature classes", "Symbology, labelling, and professional map layouts", "Basic geoprocessing and spatial analysis", "Exporting maps for presentations and reporting"]
    }, {
      icon: Layers,
      name: "ArcGIS Pro – Advanced",
      prerequisite: "Foundations",
      overview: "Develops advanced capabilities in spatial analysis, geodatabase management, and workflow automation, enabling participants to perform complex geological data operations and publish data to cloud platforms.",
      topics: ["Advanced attribute queries and relational joins", "Multi-user geodatabase development with domains and subtypes", "Raster analysis and surface modelling", "ModelBuilder and automated GIS workflows", "Spatial statistics and advanced geoprocessing", "Advanced symbology, data-driven map series, and visualization", "Hosting geospatial services for collaboration and reporting"]
    }]
  }, {
    streamTitle: "Stream B: ArcGIS for Geologists",
    courses: [{
      icon: Pickaxe,
      name: "ArcGIS for Exploration, Mining & Geotechnical Geology",
      audience: "Junior to senior geologists, mining engineers",
      overview: "Focused on geological applications of ArcGIS, this course equips geologists with the skills to manage, analyse, and visualise exploration and mining data, ensuring outputs are ready for technical reporting and decision-making.",
      topics: ["Geological spatial data models and schema design", "Drillhole, lithology, survey, and assay relational database structures", "Surface geology and structural mapping", "Survey planning and drillhole grid optimisation", "Labelling of boreholes, resource blocks, and exploration features", "Production of maps for mineral resource reporting"]
    }]
  }, {
    streamTitle: "Stream C: ArcGIS Online & Field Data Ecosystem",
    courses: [{
      icon: Globe,
      name: "ArcGIS Online – Administration & Collaboration",
      overview: "Prepares organisations to deploy secure, collaborative GIS environments, manage users, and govern spatial data for high-end geological operations.",
      topics: ["Organisation setup, licensing, and security management", "Hosting and credit allocation for geospatial services", "Web maps, apps, and data sharing governance"]
    }, {
      icon: Smartphone,
      name: "Mobile Logging Application – Digital Geological Data Capture",
      prerequisite: "ArcGIS Online – Administration",
      overview: "Provides advanced capabilities for digital field data capture and integration with ArcGIS Pro. Participants will develop high-end geological data systems suitable for exploration and operational reporting.",
      topics: ["Mobile Logging Application code structure and relational logic", "Geological logging system design (drillholes, lithology, assays)", "Validation rules and constraints for data integrity", "Offline field data capture and synchronization", "Integration with ArcGIS Pro for reporting and analysis", "Application deployment, hosting, and secure feature service management"]
    }, {
      icon: LineChart,
      name: "ArcGIS Dashboards – Geological & Operational Reporting",
      prerequisite: "ArcGIS Online + ArcGIS for Geologists",
      overview: "Enables participants to create real-time dashboards to monitor exploration progress, field data quality, and operational KPIs.",
      topics: ["Dashboard components and data integration", "Real-time field progress monitoring", "Exploration and operational KPI visualisation", "Data quality management and reporting best practices"]
    }]
  }, {
    streamTitle: "Stream D: Python & Automation",
    courses: [{
      icon: Code,
      name: "Python for ArcGIS – Fundamentals",
      overview: "Introduces participants to Python scripting for ArcGIS to automate workflows, process large datasets efficiently, and develop custom GIS tools for geological applications.",
      topics: ["Python fundamentals for geoscientists", "ArcPy scripting for spatial and attribute operations", "Batch processing and workflow automation", "Creation of custom GIS script tools"]
    }]
  }, {
    streamTitle: "Value-Bundled Packages",
    isPackages: true,
    packages: [{
      icon: BookOpen,
      name: "GIS for Geologists – Starter",
      includes: ["ArcGIS Pro – Foundations", "Mobile Logging Application (Intro)"]
    }, {
      icon: Target,
      name: "Professional Exploration Package",
      includes: ["ArcGIS Pro – Advanced", "ArcGIS for Exploration & Mining Geology", "ArcGIS Dashboards"]
    }, {
      icon: Settings,
      name: "Python Automation Package",
      includes: ["Python for ArcGIS – Fundamentals"]
    }]
  }, {
    streamTitle: "3D Geological Modelling & Geostatistics",
    isSpecialModule: true,
    courses: [{
      icon: BoxSelect,
      name: "Three-Dimensional Geological Modeling & Geostatistics: Zero to Hero",
      overview: "This course equips geologists with practical, hands-on skills to build, analyze, and report 3D geological models using Leapfrog Geo and Edge Geostatistical Extensions. Participants will learn how to create databases, validate geological data, model lithologies and structures, perform geostatistics, build block models, and generate professional resource reports ready for investors or mining companies.",
      modules: [{
        title: "Database Creation and Data Management",
        topics: ["Designing and creating project databases in MS Access", "Setting up tables for drillhole, lithology, assay, and survey data", "Establishing relationships and primary keys for consistency", "Importing datasets from Excel, CSV, and drillhole formats", "Handling multi-source datasets effectively"]
      }, {
        title: "Data Validation and QA/QC",
        topics: ["Checking for missing, inconsistent, or duplicate data", "Performing quality assurance and quality control (QA/QC)", "Visual inspection of imported data in Leapfrog Geo", "Correcting errors before modeling"]
      }, {
        title: "Topography and Visualization",
        topics: ["Importing topographic data and generating digital elevation models (DEMs)", "Creating base maps for lithology, mineralization, and structures", "Color coding and 3D visualization for better understanding", "Performing visual checks to validate data integrity"]
      }, {
        title: "Geological Model Construction",
        topics: ["Introduction to geological modeling concepts: implicit vs. explicit modeling", "Constructing surfaces for stratigraphic units and lithologies", "Choosing the most appropriate modeling method based on deposit type", "Creating a geologically realistic 3D model ready for analysis"]
      }, {
        title: "Numeric and Geostatistical Methods",
        topics: ["Numeric modeling techniques", "Introduction to geostatistics: variograms, spatial correlation, and trend analysis", "Kriging, interpolation, and conditional simulation for grade and resource estimation", "Using Edge Geostatistical Extensions for advanced analysis", "Validation of statistical models against real geological data"]
      }, {
        title: "Geological Block Modeling",
        topics: ["Defining block model extents, resolution, and cell sizes", "Assigning attributes such as lithology, density, and grades", "Inspecting block models in 3D for errors or unrealistic blocks", "Using Edge to simulate uncertainty and validate models", "Performing visual and numerical QA/QC on the block model"]
      }, {
        title: "Resource Reporting and Export",
        topics: ["Reporting total volumes, grades, and resource categories according to standards", "Generating tables, charts, and 3D maps for communication", "Exporting models and surfaces to ArcGIS, QGIS, or other mapping software", "Preparing reports for both technical and non-technical stakeholders", "Integrating datasets and presenting a fully documented, investment-grade model"]
      }, {
        title: "Practical Exercises and Tools",
        topics: ["Hands-on exercises using sample drillhole, topography, and assay datasets", "Step-by-step guides for Leapfrog Geo and Edge workflows", "QA/QC checklists for database, model, and block inspection", "Example resource reports ready for customization", "Templates and best practices for efficient workflow management"]
      }]
    }]
  }]
}];
export function Services() {
  const [activeService, setActiveService] = useState(servicePillars[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={coreAnalysisVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-800/65 to-slate-900/85" />
      </div>

      <div className="page-x relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center w-full mb-20">
          <span className="text-primary font-semibold uppercase tracking-widest text-3xl">Technical Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Full Lifecycle <span className="text-gradient">Technical Support</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            From early-stage reconnaissance through to bankable feasibility studies, 
            GSA delivers integrated geological services tailored to your project stage and investment requirements.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="flex flex-wrap justify-center gap-3 mb-16">
          {servicePillars.map(pillar => <button key={pillar.id} onClick={() => setActiveService(pillar)} className={`group flex items-center gap-3 px-8 py-5 rounded-xl transition-all duration-300 ${activeService.id === pillar.id ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-slate-800/60 backdrop-blur-md border border-white/10 text-white/80 hover:bg-slate-700/60 hover:text-white"}`}>
              <pillar.icon className="w-6 h-6" />
              <span className="font-medium text-lg">{pillar.title}</span>
            </button>)}
        </motion.div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeService.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.4
        }}>
            {activeService.isLaboratory ?
          // Laboratory Services Content
          <div className="space-y-8">
                {/* Introduction */}
                <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 mb-8">
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                    {activeService.description}
                  </p>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed mt-4">
                    All services are delivered under controlled laboratory conditions using validated methods, rigorous quality assurance procedures, and internationally recognised standards, ensuring technically defensible and auditable data.
                  </p>
                </div>

                {/* Laboratory Sections */}
                <div className="grid gap-8">
                  {activeService.laboratorySections?.map((section, sectionIndex) => <motion.div key={section.title} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4,
                delay: sectionIndex * 0.05
              }} className={`bg-slate-800/60 backdrop-blur-md border rounded-xl p-8 ${section.isAccreditation ? "border-primary/40 bg-gradient-to-br from-primary/10 to-transparent" : "border-white/10"}`}>
                      {/* Section Header */}
                      <div className="flex items-start gap-5 mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${section.isAccreditation ? "bg-primary/30" : "bg-primary/20"}`}>
                          <section.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl md:text-2xl text-white mb-2">{section.title}</h3>
                          {section.intro && <p className="text-lg md:text-xl text-white/60 leading-relaxed">{section.intro}</p>}
                        </div>
                      </div>

                      {/* Subsections for Commodity-Specific */}
                      {section.isSubsections && section.subsections ? <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-19">
                          {section.subsections.map((sub, subIndex) => <motion.div key={sub.name} initial={{
                    opacity: 0,
                    x: 10
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    duration: 0.3,
                    delay: subIndex * 0.05
                  }} className="bg-slate-700/40 border border-white/5 rounded-lg p-6">
                              <h4 className="font-medium text-lg text-white mb-3 flex items-center gap-2">
                                <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                                {sub.name}
                              </h4>
                              <p className="text-base md:text-lg text-white/60 leading-relaxed">{sub.description}</p>
                            </motion.div>)}
                        </div> : <>
                          {/* Regular Items */}
                          {section.items && <ul className="space-y-3 ml-0 md:ml-19">
                              {section.items.map((item, i) => <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-white/60">
                                  {section.isAccreditation ? <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" /> : <ChevronRight className="w-5 h-5 text-primary mt-1 shrink-0" />}
                                  <span className="leading-relaxed">{item}</span>
                                </li>)}
                            </ul>}

                          {/* Sub-items (for Environmental section) */}
                          {section.subItems && <div className="mt-6 ml-0 md:ml-19 bg-slate-700/30 border border-white/5 rounded-lg p-6">
                              <h4 className="font-medium text-lg text-white mb-4">{section.subItems.title}</h4>
                              <ul className="space-y-3">
                                {section.subItems.items.map((item, i) => <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-white/60">
                                    <ChevronRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>)}
                              </ul>
                            </div>}

                          {/* Note */}
                          {section.note && <p className="text-base md:text-lg text-white/50 italic mt-6 ml-0 md:ml-19 border-l-2 border-primary/30 pl-4">
                              {section.note}
                            </p>}
                        </>}
                    </motion.div>)}
                </div>
              </div> : activeService.isTraining ?
          // Training Content - Custom Layout
          <div className="space-y-12">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed w-full text-center mb-12">
                  {activeService.description}
                </p>
                
                {activeService.trainingStreams?.map((stream, streamIndex) => <motion.div key={stream.streamTitle} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: streamIndex * 0.1
            }} className="space-y-8">
                    <h3 className="font-display text-2xl md:text-3xl text-white border-b border-white/10 pb-4">
                      {stream.streamTitle}
                    </h3>
                    
                    {stream.isPackages ?
              // Package Layout
              <div className="grid md:grid-cols-3 gap-8">
                        {stream.packages?.map((pkg, pkgIndex) => <motion.div key={pkg.name} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3,
                  delay: pkgIndex * 0.1
                }} className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-10">
                            <div className="flex items-center gap-5 mb-8">
                              <div className="w-16 h-16 rounded-xl bg-primary/30 flex items-center justify-center">
                                <pkg.icon className="w-8 h-8 text-primary" />
                              </div>
                              <h4 className="font-display text-xl md:text-2xl text-white">{pkg.name}</h4>
                            </div>
                            <ul className="space-y-4">
                              {pkg.includes?.map((item, i) => <li key={i} className="flex items-center gap-3 text-lg md:text-xl text-white/60">
                                  <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                                  <span>{item}</span>
                                </li>)}
                            </ul>
                          </motion.div>)}
                      </div> : stream.isSpecialModule ?
              // 3D Modelling Special Module
              <div className="space-y-10">
                        {stream.courses?.map(course => <div key={course.name} className="space-y-8">
                            <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8">
                              <div className="flex items-start gap-5 mb-4">
                                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                  <course.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-display text-2xl text-white mb-3">{course.name}</h4>
                                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">{course.overview}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              {course.modules?.map((module, modIndex) => <motion.div key={module.title} initial={{
                      opacity: 0,
                      y: 10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      duration: 0.3,
                      delay: modIndex * 0.05
                    }} className="bg-slate-800/40 border border-white/10 rounded-xl p-10">
                                  <h5 className="font-medium text-lg md:text-xl text-white mb-5 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-primary/30 text-primary text-xl flex items-center justify-center">
                                      {modIndex + 1}
                                    </span>
                                    {module.title}
                                  </h5>
                                  <ul className="space-y-4">
                                    {module.topics?.map((topic, i) => <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-white/60">
                                        <ChevronRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                                        <span>{topic}</span>
                                      </li>)}
                                  </ul>
                                </motion.div>)}
                            </div>
                          </div>)}
                      </div> :
              // Regular Course Layout
              <div className="grid gap-8">
                        {stream.courses?.map((course, courseIndex) => <motion.div key={course.name} initial={{
                  opacity: 0,
                  x: 20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.3,
                  delay: courseIndex * 0.1
                }} className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-start gap-5">
                              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <course.icon className="w-8 h-8 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-3">
                                  <h4 className="font-display text-2xl text-white">{course.name}</h4>
                                  {course.prerequisite && <span className="text-base px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                      Prerequisite: {course.prerequisite}
                                    </span>}
                                </div>
                                {course.audience && <p className="text-lg md:text-xl text-primary/80 mb-4">Target Audience: {course.audience}</p>}
                                <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed">{course.overview}</p>
                                
                                <div className="grid sm:grid-cols-2 gap-4">
                                  {course.topics?.map((topic, i) => <div key={i} className="flex items-start gap-3 text-lg md:text-xl text-white/60">
                                      <ChevronRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                                      <span>{topic}</span>
                                    </div>)}
                                </div>
                              </div>
                            </div>
                          </motion.div>)}
                      </div>}
                  </motion.div>)}
              </div> : activeService.isSales ?
          // Sales Content - Equipment & Tools
          <div className="space-y-8">
                {/* Introduction */}
                <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 mb-8">
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Laboratory Equipment & Tools */}
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-3xl text-white border-b border-white/10 pb-4">
                    Laboratory Equipment & Tools
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeService.salesCategories?.filter(cat => !cat.isMonitoring && !cat.isCivil && !cat.isHighValue && !cat.isConsumables).map((category, index) => <motion.div key={category.title} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                            <category.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-display text-lg text-white">{category.title}</h4>
                        </div>
                        <p className="text-base text-white/60 leading-relaxed">{category.description}</p>
                      </motion.div>)}
                  </div>
                </div>

                {/* Water & Soil Monitoring Instruments */}
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-3xl text-white border-b border-white/10 pb-4">
                    Water & Soil Monitoring Instruments
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {activeService.salesCategories?.filter(cat => cat.isMonitoring).map((category, index) => <motion.div key={category.title} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 hover:bg-slate-800/80 hover:border-cyan-500/40 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <category.icon className="w-6 h-6 text-cyan-400" />
                          </div>
                          <h4 className="font-display text-lg text-white">{category.title}</h4>
                        </div>
                        <p className="text-base text-white/60 leading-relaxed">{category.description}</p>
                      </motion.div>)}
                  </div>
                </div>

                {/* Civil & Geotechnical Testing Equipment */}
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-3xl text-white border-b border-white/10 pb-4">
                    Civil & Geotechnical Testing Equipment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {activeService.salesCategories?.filter(cat => cat.isCivil).map((category, index) => <motion.div key={category.title} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} className="bg-slate-800/60 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 hover:bg-slate-800/80 hover:border-amber-500/40 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                            <category.icon className="w-6 h-6 text-amber-400" />
                          </div>
                          <h4 className="font-display text-lg text-white">{category.title}</h4>
                        </div>
                        <p className="text-base text-white/60 leading-relaxed">{category.description}</p>
                      </motion.div>)}
                  </div>
                </div>

                {/* High-Value Analytical & Imaging Equipment */}
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-3xl text-white border-b border-white/10 pb-4">
                    High-Value Analytical & Imaging Equipment
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {activeService.salesCategories?.filter(cat => cat.isHighValue).map((category, index) => <motion.div key={category.title} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} className="bg-gradient-to-br from-primary/15 to-transparent border border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center shrink-0">
                            <category.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-display text-lg text-white">{category.title}</h4>
                        </div>
                        <p className="text-base text-white/60 leading-relaxed">{category.description}</p>
                      </motion.div>)}
                  </div>
                </div>

                {/* Consumables & Field Essentials */}
                <div className="space-y-6">
                  <h3 className="font-display text-2xl md:text-3xl text-white border-b border-white/10 pb-4">
                    Consumables & Field Essentials
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {activeService.salesCategories?.filter(cat => cat.isConsumables).map((category, index) => <motion.div key={category.title} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }} className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                            <category.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-display text-lg text-white">{category.title}</h4>
                        </div>
                        <p className="text-base text-white/60 leading-relaxed">{category.description}</p>
                      </motion.div>)}
                  </div>
                </div>

                {/* Optional Services & Support */}
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-primary/20 rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Headphones className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl text-white">Optional Services & Support</h3>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {activeService.salesServices?.map((service, index) => <li key={index} className="flex items-start gap-3 text-lg text-white/60">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <span className="leading-relaxed">{service}</span>
                      </li>)}
                  </ul>
                </div>
              </div> :
          // Standard Service Content
          <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left - Image or Gradient */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <img src={activeService.image || tabletDataEntry} alt={activeService.title} className="w-full h-auto object-cover aspect-[4/3]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  </div>
                  
                  {/* Info Card */}
                  <div className="absolute -bottom-6 left-6 right-6 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-xl p-8">
                    <h3 className="font-display text-2xl md:text-3xl mb-3 text-white">{activeService.title}</h3>
                    <p className="text-xl text-white/60">{activeService.tagline}</p>
                  </div>
                </div>

                {/* Right - Service List */}
                <div className="space-y-10 pt-8 lg:pt-0">
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">{activeService.description}</p>
                  
                  <div className="space-y-5">
                    {activeService.services?.map((service, index) => <motion.div key={service.name} initial={{
                  opacity: 0,
                  x: 20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.3,
                  delay: index * 0.1
                }} className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 flex items-start gap-5 group hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-lg md:text-xl mb-2 flex items-center gap-2 text-white">
                            {service.name}
                            <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-lg md:text-xl text-white/60 leading-relaxed">{service.description}</p>
                        </div>
                      </motion.div>)}
                  </div>
                </div>
              </div>}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>;
}