import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../web_specific.dart' if (dart.library.io) '../stub.dart'; // conditional import

class PdfEmbed extends StatelessWidget {
  final String pdfUrl;
  final String viewType;

  const PdfEmbed({
    super.key,
    required this.pdfUrl,
    this.viewType = 'project2-pdf',
  });

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory(viewType, pdfUrl);
      return SizedBox(
        height: 600,
        child: HtmlElementView(viewType: viewType),
      );
    } else {
      return const Text('PDF preview only available on web.');
    }
  }
}

class Project2Page extends StatelessWidget {
  const Project2Page({super.key});

  @override
  Widget build(BuildContext context) {
    final List<String> imagePaths = List.generate(
      6,
      (index) => 'assets/images/aigen${index + 1}.png',
    );

    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Generative AI Engineered Bus Seat'),
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
                  'Generative AI Engineered Bus Seat',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'CAD Optimisation & AI Generative Design',
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
                          Text('SUTD: 60.002 AI Applications in Design'),
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
                          Text('CAD, Generative AI, FEA Simulation, Design'),
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
                          Text('Jan 2025– Feb 2025'),
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
                          Text('Fusion 360, Python, Canva, Vizcomm'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 32),

                const Text(
                  'This project explores how generative AI and simulation can be applied to redesign a bus seat frame that balances optimising durability, safety, cost, and material reduction. Using AI tools and 3D modeling, we tested multiple load conditions and design constraints to produce efficient yet manufacturable outputs.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),

                const SizedBox(height: 40),

                GridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: imagePaths.length,
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    crossAxisSpacing: 16,
                    mainAxisSpacing: 16,
                    childAspectRatio: 16 / 9,
                  ),
                  itemBuilder: (context, index) {
                    return ClipRRect(
                      borderRadius: BorderRadius.circular(12),
                      child: Image.asset(
                        imagePaths[index],
                        fit: BoxFit.cover,
                      ),
                    );
                  },
                ),

                const SizedBox(height: 40),

                const Text(
                  'Project Report:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal),
                ),
                const SizedBox(height: 16),
                const PdfEmbed(
                  pdfUrl: 'https://drive.google.com/file/d/1KyecKydFMcjDE3NzOe4T0LCA2swDrNa7/preview',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}