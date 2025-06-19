import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../web_specific.dart' if (dart.library.io) '../stub.dart';

class FlipbookEmbed extends StatelessWidget {
  final String flipbookUrl;
  final String viewType;

  const FlipbookEmbed({
    super.key,
    required this.flipbookUrl,
    required this.viewType,
  });

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory(viewType, flipbookUrl);
      return SizedBox(
        height: 600,
        width: double.infinity,
        child: HtmlElementView(viewType: viewType),
      );
    } else {
      return const Text('Flipbook only available on web.');
    }
  }
}

class PdfEmbed extends StatelessWidget {
  final String pdfUrl;
  final double height;

  const PdfEmbed({
    super.key,
    required this.pdfUrl,
    this.height = 500,
  });

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory('pdf-view', pdfUrl);
      return SizedBox(
        height: height,
        width: double.infinity,
        child: const HtmlElementView(viewType: 'pdf-view'),
      );
    } else {
      return const Text('PDF preview only available on web.');
    }
  }
}

class Project1Page extends StatelessWidget {
  const Project1Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('RAIA: Rapid Adaptive Intelligent Agent'),
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
                  'RAIA: Rapid Adaptive Intelligent Agent',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Automobile Design and 3D Printing',
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
                          Text('Company', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('SUTD: 60.003 Product Design Studio in collaboration with SUTD FabLab and EV Club'),
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
                          Text('CAD, Design, Prototyping, Rendering'),
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
                          Text('Jan 2025 – Apr 2025'),
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
                          Text('Fusion 360, Python, Canva, Vizcomm, KeyShot, PremierePro, Procreate'),
                        ],
                      ),
                    ),
                  ],
                ),
                  const SizedBox(height: 40),
                const Text(
                  'RAIA is an autonomous EV charging vehicle designed for Singapore\'s 2040 mobility landscape. As EV adoption continues to rise, traditional charging infrastructure faces limitations in scalability, accessibility, and land use. RAIA reimagines this challenge by shifting the paradigm: instead of EVs searching for charging stations, charging now comes to the car. RAIA is stationed in every carpark, capable of autonomously navigating to EVs, deploying modular battery units called PIPs, and delivering fast, seamless, 24/7 charging—imagine charging your car in just 6 minutes—all with zero land use and user reliance.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),
                const SizedBox(height: 40),
                const Text(
                  'Final Presentation Slide Deck:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal),
                ),
                const SizedBox(height: 16),
                FlipbookEmbed(
                  flipbookUrl: 'https://heyzine.com/flip-book/35e6fdd963.html',
                  viewType: 'presentation-flipbook',
                ),
                const SizedBox(height: 32),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: Image.asset(
                        'assets/images/raia.png',
                        width: 400,
                        height: 300,
                        fit: BoxFit.cover,
                      ),
                    ),
                    const SizedBox(width: 24),
                    const Expanded(
                      child: Text(
                        'This project was developed over 12 weeks as part of the 60.003 Product Design Studio course at SUTD, under the mentorship of Michael Reeves, Wei Lek, and Hunn Wai. Starting from a basic chassis frame, we designed the EV from the ground up—defining its purpose, concept, visual language, and functionality, culminating in a physical prototype and complete speculative ecosystem.\n\nKey features\n• A form inspired by manta rays and modular robotics, blending fluid geometry with functional modularity\n• A floorless bay system and 2-part locking mechanism for rapid PIP deployment\n• LiDAR, cameras, and ultrasonic sensors with AI computer vision\n• SolidState battery for rapid and automated charging',
                        style: TextStyle(fontSize: 16, height: 1.5),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 40),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(12),
                      child: Image.asset(
                        'assets/images/raiaposter.png',
                        width: 500,
                        height: 720,
                        fit: BoxFit.cover,
                      ),
                    ),
                    const SizedBox(width: 24),
                   // 3 Renders stacked vertically
                    Expanded(
                      child: Column(
                        children: [
                          for (var i = 1; i <= 3; i++) ...[
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12),
                              child: Image.asset(
                                'assets/images/raiarender$i.png',
                                fit: BoxFit.cover,
                                height: 230,
                                width: double.infinity,
                              ),
                            ),
                            const SizedBox(height: 12),
                          ],
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 40),
                ClipRRect(
                  borderRadius: BorderRadius.circular(12),
                  child: Image.asset(
                    'assets/images/raiaapp.png',
                    width: double.infinity,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(height: 40),
                const Text(
                  'Final Report:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal),
                ),
                const SizedBox(height: 16),
                FlipbookEmbed(
                  flipbookUrl: 'https://heyzine.com/flip-book/5126bc22c8.html',
                  viewType: 'report-flipbook',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
