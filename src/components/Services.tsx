import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { 
  Radio, 
  Drill, 
  Box, 
  Laptop, 
  Leaf,
  ChevronRight,
  Waves,
  Plane,
  Mountain,
  Zap,
  Droplets,
  Hammer,
  FileText,
  Database,
  BarChart3,
  Recycle,
  Target,
  Shield,
  GraduationCap,
  Map,
  Globe,
  Smartphone,
  LineChart,
  Code,
  BookOpen,
  Layers,
  Pickaxe,
  Settings,
  BoxSelect
} from "lucide-react";
import geophysicsSurvey from "@/assets/geophysics-survey.jpg";
import drillingRig from "@/assets/drilling-rig.jpg";
import modeling3d from "@/assets/3d-modeling.jpg";
import coreAnalysisVideo from "@/assets/core-analysis.mp4";
import tabletDataEntry from "@/assets/tablet-data-entry.jpg";

const servicePillars = [
  {
    id: "geophysics",
    icon: Radio,
    title: "Geophysical Surveys",
    tagline: "Subsurface Characterization",
    description: "Non-invasive geophysical methods providing defensible structural and lithological interpretations for drill targeting and resource delineation.",
    image: geophysicsSurvey,
    services: [
      { icon: Waves, name: "Ground Penetrating Radar (GPR)", description: "High-resolution shallow subsurface imaging for alluvial and near-surface investigations" },
      { icon: Plane, name: "Airborne & UAV Magnetics", description: "Rapid coverage magnetic surveys for structural mapping and target generation" },
      { icon: Mountain, name: "LiDAR & Topographic Surveys", description: "Precision topographic mapping for pit design and volumetric calculations" },
      { icon: Zap, name: "Induced Polarization (IP/Res)", description: "Detection of disseminated sulphide mineralization and resistivity contrasts" },
      { icon: Droplets, name: "Gravity & Ground Magnetics", description: "Density and magnetic susceptibility mapping for deep geological structures" },
    ],
  },
  {
    id: "drilling",
    icon: Drill,
    title: "Drilling & Sampling",
    tagline: "Core Recovery Excellence",
    description: "QAQC-compliant drilling programs delivering representative samples for accurate resource assessment and grade estimation.",
    image: drillingRig,
    services: [
      { icon: Drill, name: "Diamond Core Drilling", description: "HQ/NQ core recovery for detailed lithological logging and assay sampling" },
      { icon: Hammer, name: "Reverse Circulation (RC) Drilling", description: "Cost-effective grade control and resource definition programs" },
      { icon: FileText, name: "Core Logging & Photography", description: "Systematic geological documentation with digital capture workflows" },
      { icon: Target, name: "Downhole Surveys", description: "Gyroscopic and magnetic deviation surveys for hole trajectory verification" },
    ],
  },
  {
    id: "modeling",
    icon: Box,
    title: "Resource Estimation & BFS",
    tagline: "Investment-Grade Outputs",
    description: "JORC/SAMREC-compliant resource estimation and feasibility studies meeting international banking and investment standards.",
    image: modeling3d,
    services: [
      { icon: Box, name: "Mineral Resource Estimation", description: "Geostatistical modelling with full uncertainty quantification" },
      { icon: Shield, name: "Competent Persons Reports", description: "JORC/SAMREC-compliant CPRs for listing and financing purposes" },
      { icon: BarChart3, name: "Pre-Feasibility Studies (PFS)", description: "Technical and economic assessments for project advancement" },
      { icon: FileText, name: "Bankable Feasibility Studies", description: "Investment-grade technical reports for project financing" },
    ],
  },
  {
    id: "digital",
    icon: Laptop,
    title: "Digital Solutions",
    tagline: "Data-Driven Workflows",
    description: "Integrated digital platforms enabling real-time data capture, validation, and visualization for operational efficiency.",
    image: tabletDataEntry,
    services: [
      { icon: Database, name: "Mobile Data Capture", description: "Field data collection with built-in validation and QAQC checks" },
      { icon: BarChart3, name: "Operational Dashboards", description: "Real-time project monitoring and KPI tracking platforms" },
      { icon: Laptop, name: "Cloud GIS Platforms", description: "Centralized spatial data management and multi-user access" },
      { icon: Box, name: "3D Model Visualization", description: "Interactive geological model viewers for stakeholder presentations" },
    ],
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental & Closure",
    tagline: "ESG Compliance",
    description: "Environmental management and mine closure planning aligned with regulatory requirements and ESG expectations.",
    image: null,
    services: [
      { icon: FileText, name: "Environmental Management Plans", description: "Regulatory-compliant EMP development and implementation" },
      { icon: Recycle, name: "Mine Closure Planning", description: "Progressive rehabilitation and closure cost estimation" },
      { icon: Leaf, name: "Rehabilitation Monitoring", description: "Land restoration progress tracking and reporting" },
      { icon: Droplets, name: "Hydrogeological Studies", description: "Groundwater assessments and water management planning" },
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training",
    tagline: "Professional Development",
    description: "Comprehensive ArcGIS and geological data training programs designed for exploration, mining, and geotechnical professionals. From foundational GIS skills to advanced 3D modelling and geostatistics.",
    image: null,
    isTraining: true,
    trainingStreams: [
      {
        streamTitle: "Stream A: Core ArcGIS Platform Training",
        courses: [
          {
            icon: Map,
            name: "ArcGIS Pro – Foundations",
            audience: "Graduate geologists, junior GIS users, technicians",
            overview: "Provides a comprehensive introduction to ArcGIS Pro, enabling participants to efficiently manage spatial data, create and edit geodatabases, and produce professional maps for technical and reporting purposes.",
            topics: [
              "ArcGIS Pro interface and project organisation",
              "Coordinate systems, projections, and spatial referencing",
              "Vector, raster, and tabular data management",
              "Creation and editing of geodatabase feature classes",
              "Symbology, labelling, and professional map layouts",
              "Basic geoprocessing and spatial analysis",
              "Exporting maps for presentations and reporting"
            ]
          },
          {
            icon: Layers,
            name: "ArcGIS Pro – Advanced",
            prerequisite: "Foundations",
            overview: "Develops advanced capabilities in spatial analysis, geodatabase management, and workflow automation, enabling participants to perform complex geological data operations and publish data to cloud platforms.",
            topics: [
              "Advanced attribute queries and relational joins",
              "Multi-user geodatabase development with domains and subtypes",
              "Raster analysis and surface modelling",
              "ModelBuilder and automated GIS workflows",
              "Spatial statistics and advanced geoprocessing",
              "Advanced symbology, data-driven map series, and visualization",
              "Hosting geospatial services for collaboration and reporting"
            ]
          }
        ]
      },
      {
        streamTitle: "Stream B: ArcGIS for Geologists",
        courses: [
          {
            icon: Pickaxe,
            name: "ArcGIS for Exploration, Mining & Geotechnical Geology",
            audience: "Junior to senior geologists, mining engineers",
            overview: "Focused on geological applications of ArcGIS, this course equips geologists with the skills to manage, analyse, and visualise exploration and mining data, ensuring outputs are ready for technical reporting and decision-making.",
            topics: [
              "Geological spatial data models and schema design",
              "Drillhole, lithology, survey, and assay relational database structures",
              "Surface geology and structural mapping",
              "Survey planning and drillhole grid optimisation",
              "Labelling of boreholes, resource blocks, and exploration features",
              "Production of maps for mineral resource reporting"
            ]
          }
        ]
      },
      {
        streamTitle: "Stream C: ArcGIS Online & Field Data Ecosystem",
        courses: [
          {
            icon: Globe,
            name: "ArcGIS Online – Administration & Collaboration",
            overview: "Prepares organisations to deploy secure, collaborative GIS environments, manage users, and govern spatial data for high-end geological operations.",
            topics: [
              "Organisation setup, licensing, and security management",
              "Hosting and credit allocation for geospatial services",
              "Web maps, apps, and data sharing governance"
            ]
          },
          {
            icon: Smartphone,
            name: "Mobile Logging Application – Digital Geological Data Capture",
            prerequisite: "ArcGIS Online – Administration",
            overview: "Provides advanced capabilities for digital field data capture and integration with ArcGIS Pro. Participants will develop high-end geological data systems suitable for exploration and operational reporting.",
            topics: [
              "Mobile Logging Application code structure and relational logic",
              "Geological logging system design (drillholes, lithology, assays)",
              "Validation rules and constraints for data integrity",
              "Offline field data capture and synchronization",
              "Integration with ArcGIS Pro for reporting and analysis",
              "Application deployment, hosting, and secure feature service management"
            ]
          },
          {
            icon: LineChart,
            name: "ArcGIS Dashboards – Geological & Operational Reporting",
            prerequisite: "ArcGIS Online + ArcGIS for Geologists",
            overview: "Enables participants to create real-time dashboards to monitor exploration progress, field data quality, and operational KPIs.",
            topics: [
              "Dashboard components and data integration",
              "Real-time field progress monitoring",
              "Exploration and operational KPI visualisation",
              "Data quality management and reporting best practices"
            ]
          }
        ]
      },
      {
        streamTitle: "Stream D: Python & Automation",
        courses: [
          {
            icon: Code,
            name: "Python for ArcGIS – Fundamentals",
            overview: "Introduces participants to Python scripting for ArcGIS to automate workflows, process large datasets efficiently, and develop custom GIS tools for geological applications.",
            topics: [
              "Python fundamentals for geoscientists",
              "ArcPy scripting for spatial and attribute operations",
              "Batch processing and workflow automation",
              "Creation of custom GIS script tools"
            ]
          }
        ]
      },
      {
        streamTitle: "Value-Bundled Packages",
        isPackages: true,
        packages: [
          {
            icon: BookOpen,
            name: "GIS for Geologists – Starter",
            includes: ["ArcGIS Pro – Foundations", "Mobile Logging Application (Intro)"]
          },
          {
            icon: Target,
            name: "Professional Exploration Package",
            includes: ["ArcGIS Pro – Advanced", "ArcGIS for Exploration & Mining Geology", "ArcGIS Dashboards"]
          },
          {
            icon: Settings,
            name: "Python Automation Package",
            includes: ["Python for ArcGIS – Fundamentals"]
          }
        ]
      },
      {
        streamTitle: "3D Geological Modelling & Geostatistics",
        isSpecialModule: true,
        courses: [
          {
            icon: BoxSelect,
            name: "Three-Dimensional Geological Modeling & Geostatistics: Zero to Hero",
            overview: "This course equips geologists with practical, hands-on skills to build, analyze, and report 3D geological models using Leapfrog Geo and Edge Geostatistical Extensions. Participants will learn how to create databases, validate geological data, model lithologies and structures, perform geostatistics, build block models, and generate professional resource reports ready for investors or mining companies.",
            modules: [
              {
                title: "Database Creation and Data Management",
                topics: [
                  "Designing and creating project databases in MS Access",
                  "Setting up tables for drillhole, lithology, assay, and survey data",
                  "Establishing relationships and primary keys for consistency",
                  "Importing datasets from Excel, CSV, and drillhole formats",
                  "Handling multi-source datasets effectively"
                ]
              },
              {
                title: "Data Validation and QA/QC",
                topics: [
                  "Checking for missing, inconsistent, or duplicate data",
                  "Performing quality assurance and quality control (QA/QC)",
                  "Visual inspection of imported data in Leapfrog Geo",
                  "Correcting errors before modeling"
                ]
              },
              {
                title: "Topography and Visualization",
                topics: [
                  "Importing topographic data and generating digital elevation models (DEMs)",
                  "Creating base maps for lithology, mineralization, and structures",
                  "Color coding and 3D visualization for better understanding",
                  "Performing visual checks to validate data integrity"
                ]
              },
              {
                title: "Geological Model Construction",
                topics: [
                  "Introduction to geological modeling concepts: implicit vs. explicit modeling",
                  "Constructing surfaces for stratigraphic units and lithologies",
                  "Choosing the most appropriate modeling method based on deposit type",
                  "Creating a geologically realistic 3D model ready for analysis"
                ]
              },
              {
                title: "Numeric and Geostatistical Methods",
                topics: [
                  "Numeric modeling techniques",
                  "Introduction to geostatistics: variograms, spatial correlation, and trend analysis",
                  "Kriging, interpolation, and conditional simulation for grade and resource estimation",
                  "Using Edge Geostatistical Extensions for advanced analysis",
                  "Validation of statistical models against real geological data"
                ]
              },
              {
                title: "Geological Block Modeling",
                topics: [
                  "Defining block model extents, resolution, and cell sizes",
                  "Assigning attributes such as lithology, density, and grades",
                  "Inspecting block models in 3D for errors or unrealistic blocks",
                  "Using Edge to simulate uncertainty and validate models",
                  "Performing visual and numerical QA/QC on the block model"
                ]
              },
              {
                title: "Resource Reporting and Export",
                topics: [
                  "Reporting total volumes, grades, and resource categories according to standards",
                  "Generating tables, charts, and 3D maps for communication",
                  "Exporting models and surfaces to ArcGIS, QGIS, or other mapping software",
                  "Preparing reports for both technical and non-technical stakeholders",
                  "Integrating datasets and presenting a fully documented, investment-grade model"
                ]
              },
              {
                title: "Practical Exercises and Tools",
                topics: [
                  "Hands-on exercises using sample drillhole, topography, and assay datasets",
                  "Step-by-step guides for Leapfrog Geo and Edge workflows",
                  "QA/QC checklists for database, model, and block inspection",
                  "Example resource reports ready for customization",
                  "Templates and best practices for efficient workflow management"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(servicePillars[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={coreAnalysisVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-800/65 to-slate-900/85" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-primary text-base font-semibold uppercase tracking-widest">Technical Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Full Lifecycle <span className="text-gradient">Technical Support</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            From early-stage reconnaissance through to bankable feasibility studies, 
            GSA delivers integrated geological services tailored to your project stage and investment requirements.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {servicePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveService(pillar)}
              className={`group flex items-center gap-3 px-8 py-5 rounded-xl transition-all duration-300 ${
                activeService.id === pillar.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-slate-800/60 backdrop-blur-md border border-white/10 text-white/80 hover:bg-slate-700/60 hover:text-white"
              }`}
            >
              <pillar.icon className="w-6 h-6" />
              <span className="font-medium text-lg">{pillar.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeService.isTraining ? (
              // Training Content - Custom Layout
              <div className="space-y-12">
                <p className="text-xl md:text-2xl text-white/75 leading-relaxed max-w-4xl mx-auto text-center mb-12">
                  {activeService.description}
                </p>
                
                {activeService.trainingStreams?.map((stream, streamIndex) => (
                  <motion.div
                    key={stream.streamTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: streamIndex * 0.1 }}
                    className="space-y-8"
                  >
                    <h3 className="font-display text-2xl md:text-3xl text-white border-b border-white/10 pb-4">
                      {stream.streamTitle}
                    </h3>
                    
                    {stream.isPackages ? (
                      // Package Layout
                      <div className="grid md:grid-cols-3 gap-8">
                        {stream.packages?.map((pkg, pkgIndex) => (
                          <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: pkgIndex * 0.1 }}
                            className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-10"
                          >
                            <div className="flex items-center gap-5 mb-8">
                              <div className="w-16 h-16 rounded-xl bg-primary/30 flex items-center justify-center">
                                <pkg.icon className="w-8 h-8 text-primary" />
                              </div>
                              <h4 className="font-display text-xl md:text-2xl text-white">{pkg.name}</h4>
                            </div>
                            <ul className="space-y-4">
                              {pkg.includes?.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-xl md:text-2xl text-white/70">
                                  <ChevronRight className="w-6 h-6 text-primary shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    ) : stream.isSpecialModule ? (
                      // 3D Modelling Special Module
                      <div className="space-y-10">
                        {stream.courses?.map((course) => (
                          <div key={course.name} className="space-y-8">
                            <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8">
                              <div className="flex items-start gap-5 mb-4">
                                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                  <course.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-display text-2xl text-white mb-3">{course.name}</h4>
                                  <p className="text-xl text-white/70 leading-relaxed">{course.overview}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              {course.modules?.map((module, modIndex) => (
                                <motion.div
                                  key={module.title}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: modIndex * 0.05 }}
                                  className="bg-slate-800/40 border border-white/10 rounded-xl p-10"
                                >
                                  <h5 className="font-medium text-xl md:text-2xl text-white mb-5 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-primary/30 text-primary text-xl flex items-center justify-center">
                                      {modIndex + 1}
                                    </span>
                                    {module.title}
                                  </h5>
                                  <ul className="space-y-4">
                                    {module.topics?.map((topic, i) => (
                                      <li key={i} className="flex items-start gap-3 text-xl md:text-2xl text-white/60">
                                        <ChevronRight className="w-6 h-6 text-primary mt-1 shrink-0" />
                                        <span>{topic}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Regular Course Layout
                      <div className="grid gap-8">
                        {stream.courses?.map((course, courseIndex) => (
                          <motion.div
                            key={course.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: courseIndex * 0.1 }}
                            className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300"
                          >
                            <div className="flex items-start gap-5">
                              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <course.icon className="w-8 h-8 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-3">
                                  <h4 className="font-display text-2xl text-white">{course.name}</h4>
                                  {course.prerequisite && (
                                    <span className="text-base px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                      Prerequisite: {course.prerequisite}
                                    </span>
                                  )}
                                </div>
                                {course.audience && (
                                  <p className="text-xl md:text-2xl text-primary/80 mb-4">Target Audience: {course.audience}</p>
                                )}
                                <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">{course.overview}</p>
                                
                                <div className="grid sm:grid-cols-2 gap-4">
                                  {course.topics?.map((topic, i) => (
                                    <div key={i} className="flex items-start gap-3 text-xl md:text-2xl text-white/60">
                                      <ChevronRight className="w-6 h-6 text-primary mt-1 shrink-0" />
                                      <span>{topic}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              // Standard Service Content
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left - Image or Gradient */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={activeService.image || tabletDataEntry}
                      alt={activeService.title}
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
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
                  <p className="text-xl md:text-2xl text-white/75 leading-relaxed">{activeService.description}</p>
                  
                  <div className="space-y-5">
                    {activeService.services?.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 flex items-start gap-5 group hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-xl md:text-2xl mb-2 flex items-center gap-2 text-white">
                            {service.name}
                            <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
