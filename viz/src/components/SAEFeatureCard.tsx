import { useContext } from "react";
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";
import { SAEContext } from "../SAEContext";
import FullSeqsViewer from "./FullSeqsViewer";
import { ProteinActivationsData } from "@/utils";
import { Link, useLocation } from "react-router-dom";
import Markdown from "@/components/Markdown";

export default function SAEFeatureCard({
  dim,
  proteinActivationsData,
  highlightStart,
  highlightEnd,
}: {
  dim: number;
  proteinActivationsData: ProteinActivationsData;
  highlightStart?: number;
  highlightEnd?: number;
}) {
  const { SAEConfig } = useContext(SAEContext);

  // Preserve the sequence context query params, same as in
  // useNavigateWithSeqContext
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const newSearchParams = new URLSearchParams();
  if (searchParams.has("pdb")) {
    newSearchParams.set("pdb", searchParams.get("pdb")!);
  }
  if (searchParams.has("seq")) {
    newSearchParams.set("seq", searchParams.get("seq")!);
  }
  const newSearch = newSearchParams.toString();

  const desc = SAEConfig.curated?.find((f) => f.dim === dim)?.desc;

  return (
    <Link to={`${dim}${newSearch ? `?${newSearch}` : ""}`} className="block">
      <Card key={dim} className="cursor-pointer">
        <CardHeader>
          <CardTitle className="text-left">Feature {dim}</CardTitle>
          {desc && (
            <CardDescription>
              <Markdown>{desc}</Markdown>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <FullSeqsViewer
            proteinActivationsData={proteinActivationsData}
            highlightStart={highlightStart}
            highlightEnd={highlightEnd}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
