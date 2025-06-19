// Fameline APSG AI Website
import 'package:flutter/material.dart';

class Project13Page extends StatelessWidget {
  const Project13Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Project 13: LUVA – AI-Powered Louver Tool'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 900),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'LUVA: AI-Powered Louver Specification Tool',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Intelligent Platform to Streamline Louvers Supply in Construction',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300),
                ),
                const SizedBox(height: 32),
                Wrap(
                  alignment: WrapAlignment.spaceBetween,
                  runSpacing: 24,
                  spacing: 32,
                  children: const [
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Company:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Fameline APSG, 60.004 Service Design Studio'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('User Research, Design, Coding, Rendering, CAD'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('May 2025 - Present'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Fusion 360, Figma, Canva, Visual Studio Code, APIs'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 40),

                const Text(
                  'What is LUVA?',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),
                const Text(
                  '''Architects and construction professionals currently spend months conversing and comparing louver products. Fameline APSG is a local supplier of performance louvers, and are seeking for an innovative solution to this inefficiency. LUVA is an intelligent web platform that simplifies the selection and specification of louvers through an AI-powered recommendation engine and an intuitive UI tailored to industry professionals. 

*Note: This project is ongoing and will see further development.''',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),

                const SizedBox(height: 32),
                const Text(
                  'Key Features',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),
                const Text(
                  '''
• AI Recommendation Engine: Suggests optimal louvers based on climate, use case,and constraints.
• Project Input Interface: Clean, minimal UI for architects to enter project and building data
• Geographic Compliance Checker: Ensures compatibility with local codes
• Downloadable Specs: Brochures, CAD files, and performance data
• Direct Inquiry Routing: Connects architects directly with Fameline sales specialists
''',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),
                const SizedBox(height: 12),
                const Text(
                  'Prototyping',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 24),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Center(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(16),
                        child: Image.asset(
                          'assets/images/fameline1.png',
                          width: 800,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),
                    Center(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(16),
                        child: Image.asset(
                          'assets/images/fameline2.png',
                          width: 800,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 40),
              ],
            ),
          ),
        ),
      ),
    );
  }
}