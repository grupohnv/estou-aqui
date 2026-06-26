export default function SafetyNotice({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-[#3D3D3D66] text-center px-4">
        Inspirado nos ensinamentos bíblicos. Não substitui apoio humano, pastoral, médico ou psicológico.
      </p>
    )
  }
  return (
    <div className="bg-[#8A9E7E1A] border border-[#8A9E7E4D] rounded-2xl p-4 text-sm text-[#3D3D3DB3] space-y-1">
      <p className="font-medium text-[#3D3D3DE6]">Aviso importante</p>
      <p>O Estou Aqui não substitui apoio médico, psicológico, pastoral ou familiar.</p>
      <p>Em situações de risco, procure ajuda humana imediata.</p>
      <p className="font-medium">CVV: 188 &nbsp;|&nbsp; Emergência: 192 / 190</p>
    </div>
  )
}
