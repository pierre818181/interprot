# Convenience script to run all autointerp experiments.

PLM_DIM=1280
PLM_LAYER=24

for motif in "E{3,12}[T]{2,5}E{3,12}" "H{4,40}[TS]{1,12}H{4,40}"; do
    autointerp labels2latents \
        --labels-csv "interprot/autointerp/results/labels/${motif}_labels.csv" \
        --sae-checkpoint "interprot/checkpoints/l${PLM_LAYER}_plm${PLM_DIM}_sae4096_k128_100k.pt" \
        --plm-dim $PLM_DIM \
        --plm-layer $PLM_LAYER \
        --sae-dim 4096 \
        --out-path "interprot/autointerp/results/l${PLM_LAYER}_plm${PLM_DIM}_sae4096_k128_100k/${motif}_mapping.csv"

    autointerp labels2latents \
        --labels-csv "interprot/autointerp/results/labels/${motif}_labels.csv" \
        --sae-checkpoint "interprot/checkpoints/l${PLM_LAYER}_plm${PLM_DIM}_sae4096_k128_211k.pt" \
        --plm-dim $PLM_DIM \
        --plm-layer $PLM_LAYER \
        --sae-dim 4096 \
        --out-path "interprot/autointerp/results/l${PLM_LAYER}_plm${PLM_DIM}_sae4096_k128_211k/${motif}_mapping.csv"

    autointerp labels2latents \
        --labels-csv "interprot/autointerp/results/labels/${motif}_labels.csv" \
        --sae-checkpoint "interprot/checkpoints/l${PLM_LAYER}_plm${PLM_DIM}_sae32768_k128_100k.pt" \
        --plm-dim $PLM_DIM \
        --plm-layer $PLM_LAYER \
        --sae-dim 32768 \
        --out-path "interprot/autointerp/results/l${PLM_LAYER}_plm${PLM_DIM}_sae32768_k128_100k/${motif}_mapping.csv"
done
